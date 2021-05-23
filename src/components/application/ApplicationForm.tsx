import React, { useEffect } from 'react'

function ApplicationForm() {
  useEffect(() => {
    const s: any = document.createElement('script')
    const options = {
      id: 17,
      theme: 0,
      container: 'c7',
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
    <div id="c7" style={{ minHeight: '1500px' }}>
      Fill in the{' '}
      <a href="https://www.bf-tools.uzh.ch/applications/easyforms/index.php?r=app%2Fform&id=17">
        online form
      </a>
      .
    </div>
  )
}

export default ApplicationForm
