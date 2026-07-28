export interface CadConcept { title: string; units: 'mm'|'cm'|'m'|'in'; layers: string[]; notes: string[]; }
export function createCadConcept(title: string): CadConcept { return { title, units: 'mm', layers: ['structure','dimensions','annotations','accessibility-clearances'], notes: ['Concept only; validate with licensed engineering review before construction or manufacturing.'] }; }
