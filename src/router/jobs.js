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
    path: '/job-description/:id',
    name: 'JobDescription',
    component: JobDescription
    // props: ['id']
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
    // children: [
    //   { path: ':id', name: 'JobDescription', component: JobDescription }
    // ]
  }
]
