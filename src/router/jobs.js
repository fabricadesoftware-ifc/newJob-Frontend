import JobRegistration from '@/views/jobs/JobRegistration'
import JobDescription from '@/views/jobs/JobDescription'
import Jobs from '@/views/jobs/Jobs'

export default [
  {
    path: '/job-register',
    name: 'JobRegistration',
    component: JobRegistration
  },
  {
    path: '/job-description',
    name: 'JobRegistration',
    component: JobDescription
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  }
]
