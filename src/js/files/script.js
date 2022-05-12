// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js'
// Подключение списка активных модулей
import { flsModules } from './modules.js'

let pageId = document
    .querySelector('[data-id-page]')
    .getAttribute('data-id-page'),
  navItem = document.querySelector(`[data-id-nav=${pageId}]`)

if (pageId == navItem.getAttribute('data-id-nav')) {
  navItem.classList.add('_active')
}
