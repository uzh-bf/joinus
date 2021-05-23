import React, { useEffect } from 'react'

function SubscribeForm() {
  useEffect(() => {
    const s: any = document.createElement('script')
    const options = {
      id: 18,
      theme: 0,
      container: 'c8',
      height: '479px',
      form:
        '//www.bf-tools.uzh.ch/applications/easyforms/index.php?r=app%2Fembed',
    }
    s.type = 'text/javascript'
    s.src =
      'https://www.bf-tools.uzh.ch/applications/easyforms/static_files/js/form.widget.js'
    s.onload = s.onreadystatechange = function () {
      const rs = this.readyState
      if (rs) if (rs != 'complete') if (rs != 'loaded') return
      try {
        new window.EasyForms().initialize(options).display()
      } catch (e) {}
    }
    const scr = document.getElementsByTagName('script')[0]
    const par = scr.parentNode
    par.insertBefore(s, scr)
  })

  return (
    <div id="c8">
      Fill in the{' '}
      <a href="https://www.bf-tools.uzh.ch/applications/easyforms/index.php?r=app%2Fform&id=18">
        online form
      </a>
      .
    </div>
  )
}

export default SubscribeForm
