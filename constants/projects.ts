export type ProjectId = 'deepfriend' | 'puente';

export type Project = {
  id: ProjectId;
  name: string;
  url: string;
};

export const projects: Project[] = [
  {
    id: 'deepfriend',
    name: 'Deepfriend',
    url: 'https://deepfriend.es',
  },
  {
    id: 'puente',
    name: 'Puente',
    url: 'https://puente.pablovallejo.dev',
  },
];
