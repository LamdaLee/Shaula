"""Render the source HTML worksheets to PNG previews and A4 PDFs.
Requires Python Playwright and Chromium. No network requests or real user data.
"""
from pathlib import Path
from playwright.sync_api import sync_playwright
import os
root=Path(__file__).resolve().parents[1]/'public'/'worksheets'
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path=os.getenv('SHAULA_CHROMIUM','/usr/bin/chromium'),args=['--no-sandbox'],env={**os.environ,'NO_PROXY':'localhost,127.0.0.1'})
 page=browser.new_page(viewport={'width':794,'height':1123},device_scale_factor=1)
 for name in ['api-worksheet','db-worksheet']:
  page.set_content((root/f'{name}.html').read_text())
  page.screenshot(path=str(root/f'{name}.png'),full_page=True)
  page.pdf(path=str(root/f'{name}.pdf'),format='A4',print_background=True,prefer_css_page_size=True)
  print(name,'PNG / PDF exported')
 browser.close()
