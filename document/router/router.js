import menuConfig from '../config/menu-list.json'
import main from "../components/main";
const docsChildrenRoute = []
const routeMap = {
  path: '/',
  redirect: '/introduction',
  component: main,
  children: docsChildrenRoute
}

Object.keys(menuConfig).forEach((item) => {
  const groups = menuConfig[item]
  Object.keys(groups).forEach((name) => {
    Object.keys(groups.subList).forEach((key) => {
      docsChildrenRoute.push({
        path: `/${key}`,
        component: () =>
          import (`../components/markdown/${key}.md`)
      })
    })
  })
})
export default routeMap
