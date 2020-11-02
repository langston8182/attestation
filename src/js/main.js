import 'bootstrap/dist/css/bootstrap.min.css'

import '../css/main.css'

import './icons'
import './check-updates'
import { prepareForm } from './form-util'
import { warnFacebookBrowserUserIfNecessary } from './facebook-util'
import { addVersion } from './util'
import { createForm } from './form'
import $ from 'jquery'

warnFacebookBrowserUserIfNecessary()

$('input[type=radio][name=attestation]').on('change', function () {
  const attestation = $('input[name="attestation"]:checked').val()
  createForm(attestation)
  prepareForm()
})

addVersion(process.env.VERSION)
