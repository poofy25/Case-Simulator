const CASE_NAMES = [
  'snakebite_case',
  'operation_broken_fang_case',
  'fracture_case',
  'prisma_2_case',
  'shattered_web_case',
  'cs20_case',
  'prisma_case',
  'danger_zone_case',
  'horizon_case',
  'clutch_case',
  'spectrum_2_case',
  'operation_hydra_case',
  'spectrum_case',
  'glove_case',
  'gamma_2_case',
  'gamma_case',
  'chroma_3_case',
  'operation_wildfire_case',
  'revolver_case',
  'shadow_case',
  'falchion_case',
  'chroma_2_case',
  'chroma_case',
  'operation_vanguard_weapon_case',
  'esports_2014_summer_case',
  'operation_breakout_weapon_case',
  'huntsman_weapon_case',
  'operation_phoenix_weapon_case',
  'csgo_weapon_case_3',
  'esports_2013_winter_case',
  'winter_offensive_weapon_case',
  'csgo_weapon_case_2',
  'operation_bravo_case',
  'csgo_weapon_case',
  'esports_2013_case'
];

async function loadCaseData() {
  try {
    const cases = await Promise.all(
      CASE_NAMES.map(async (caseName) => {
        const response = await fetch(`/Case-Simulator/Data/json/${caseName}.json`);
        if (!response.ok) {
          throw new Error(`Failed to load ${caseName}`);
        }
        return response.json();
      })
    );
    return cases;
  } catch (error) {
    console.error('Error loading case data:', error);
    throw error;
  }
}

// For compatibility with existing code
let CaseData = [];

// Initialize data
(async () => {
  try {
    CaseData = await loadCaseData();
  } catch (error) {
    console.error('Failed to initialize case data');
  }
})();

export { CaseData, loadCaseData };