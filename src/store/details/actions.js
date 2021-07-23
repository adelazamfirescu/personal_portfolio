export async function loadProjects({ commit }, payload) {
  commit("SET_PROJECTS", payload);
}

export async function loadSocialHandles({ commit }, payload) {
  commit("SET_SOCIAL_HANDLES", payload);
}
export async function loadSkills({ commit }, payload) {
  commit("SET_SKILLS", payload);
}
export async function loadTools({ commit }, payload) {
  commit("SET_TOOLS", payload);
}
export async function loadStudies({ commit }, payload) {
  commit("SET_STUDIES", payload);
}
export async function loadCareers({ commit }, payload) {
  commit("SET_CAREERS", payload);
}
