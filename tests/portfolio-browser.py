"""Production UI journeys for the portfolio revision; no external AI calls."""
from pathlib import Path
from playwright.sync_api import sync_playwright,expect
import os,json
BASE=os.getenv('SHAULA_TEST_URL','http://127.0.0.1:3317')
OUT=Path(os.getenv('SHAULA_TEST_ARTIFACTS','/workspace/reports/shaula-revision'));OUT.mkdir(parents=True,exist_ok=True)
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path=os.getenv('SHAULA_CHROMIUM','/usr/bin/chromium'),args=['--no-sandbox'],env={**os.environ,'NO_PROXY':'localhost,127.0.0.1'})
 for width in [320,390,1440]:
  ctx=browser.new_context(viewport={'width':width,'height':1000},reduced_motion='reduce')
  page=ctx.new_page();errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
  for path in ['/','/case','/case/byeolieum','/education','/about','/try']:
   assert page.goto(BASE+path).status==200
   expect(page.locator('h1')).to_have_count(1)
   assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'),(width,path,'overflow')
   assert page.locator('main').inner_text().strip()
   if path=='/':
    expect(page.get_by_role('heading',name='기술의 구조를, 일상의 언어로.')).to_be_visible()
    expect(page.get_by_role('heading',name='전화교환원과 웨이터',exact=True)).to_be_visible()
    page.get_by_text('비유에서 한 걸음 더',exact=True).first.click()
    expect(page.get_by_text('API는 사람처럼 의도를 알아채지 않아요.',exact=False)).to_be_visible()
    assert page.locator('a[href="https://byeolieum.com"]').count()==1
    page.screenshot(path=str(OUT/f'home-{width}.png'),full_page=True)
   if path=='/education':
    for file in ['api-worksheet','db-worksheet']:
     assert ctx.request.get(BASE+f'/worksheets/{file}.png').status==200
     response=ctx.request.get(BASE+f'/worksheets/{file}.pdf');assert response.status==200 and response.body().startswith(b'%PDF-')
    page.screenshot(path=str(OUT/f'education-{width}.png'),full_page=True)
   if path=='/case/byeolieum':
    expect(page.get_by_text('배포된 프로토타입 · 개선 중',exact=True)).to_be_visible()
  page.get_by_role('button',name='예시로 채워 보기',exact=True).click()
  for i in range(5):page.get_by_role('button',name='다음',exact=True).click()
  page.get_by_role('button',name='실험 카드 만들기',exact=True).click()
  expect(page.get_by_role('heading',name='내 업무의 AI 활용 실험')).to_be_visible()
  education=page.get_by_role('link',name='50분 실습 커리큘럼 보기');expect(education).to_have_attribute('href','/education#worksheets')
  expect(page.get_by_role('link',name='조직 맞춤형 워크숍 문의')).to_have_attribute('href',__import__('re').compile('^mailto:lamda@shaula.kr'))
  page.reload();expect(page.get_by_role('heading',name='내 업무의 AI 활용 실험')).to_be_visible()
  page.get_by_role('button',name='이 계획으로 요청문 만들기').click();expect(page.get_by_role('heading',name='AI에 전달할 요청문 초안')).to_be_visible()
  assert page.evaluate('document.documentElement.scrollWidth<=innerWidth')
  page.screenshot(path=str(OUT/f'try-result-{width}.png'),full_page=True)
  education.click();expect(page.locator('#worksheets')).to_be_visible()
  assert not errors,errors
  print(f'PASS {width}px: six routes, one H1, no overflow, translation disclosure, PDF assets and completed try → education journey',flush=True)
  ctx.close()
 ctx=browser.new_context();page=ctx.new_page();page.goto(BASE+'/examples/api-lab.html')
 page.get_by_role('button',name='자료 요청',exact=True).click();expect(page.locator('#output')).to_contain_text('성공: 요청한 자료가 도착했어요.')
 page.get_by_role('button',name='없는 주소 요청').click();expect(page.locator('#output')).to_contain_text('요청 실패: HTTP 404')
 page.get_by_role('button',name='자료 요청',exact=True).click();expect(page.locator('#output')).to_contain_text('성공:')
 for sheet in ['api','db']:
  page.goto(BASE+f'/worksheets/{sheet}-worksheet.html');expect(page.locator('h1')).to_have_count(1)
  page.locator('[contenteditable]').first.fill('직접 확인한 결과');expect(page.locator('[contenteditable]').first).to_have_text('직접 확인한 결과')
 print('PASS API lab successful response, 404, retry and editable worksheets',flush=True)
 browser.close()
