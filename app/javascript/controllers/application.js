import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

// added because popoverjs looked for process.env
window.process = {env: {}}

export { application }
