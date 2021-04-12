import { projectsData } from '../data/projectsData'

export const getProjectByID = (id) => {
  return projectsData.find((project) => project.id === id)
}
