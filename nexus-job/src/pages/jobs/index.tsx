import { supabase } from '@/lib/supabaseClient'
import Image from 'next/image'

export default function JobsPage({ jobs }: any) {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 xl:grid-cols-3">
      {jobs.map((job: any) => (
        <div
          key={job.id}
          className="rounded-xl border p-5 shadow-sm transition hover:shadow-md"
        >
          <Image
            src={job.image_url}
            alt={job.company}
            width={500}
            height={500}
            className="mb-3 h-16 w-16 object-contain"
          />

          <h2 className="text-xl font-semibold">{job.title}</h2>
          <p className="text-gray-600">{job.company}</p>
          <p className="text-sm text-gray-500">{job.location}</p>

          <span className="mt-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
            {job.type}
          </span>

          <p className="mt-3 font-medium">{job.salary}</p>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const { data: jobs, error } = await supabase
    .from('jobs')
    .select('*')
    .order('id', { ascending: true })

  return {
    props: {
      jobs: jobs ?? [],
    },
  }
}
