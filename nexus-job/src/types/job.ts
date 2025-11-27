export interface Job {
  id: string
  title: string
  company: string
  location: string
  type: string
  salary: string
  image_url: string
  created_at: string
  description?: string
  requirements?: string[]
  benefits?: string[]
  application_url?: string
  experience_level?: string
  remote_policy?: 'remote' | 'hybrid' | 'onsite'
  category?: string
}

export interface JobCardProps {
  job: Job
}

export interface JobsGridProps {
  jobs: Job[]
}

export interface JobDetailProps {
  job: Job
}
