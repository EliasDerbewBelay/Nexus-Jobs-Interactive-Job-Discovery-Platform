import Image from 'next/image'
import { useRouter } from 'next/router'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  MapPin, 
  Building2, 
  Clock, 
  DollarSign, 
  Globe, 
  Briefcase,
  ArrowLeft,
  Share2,
  Bookmark,
  Calendar,
  Users
} from 'lucide-react'
import { JobDetailProps } from '@/types/job'
import { useState } from 'react'

export function JobDetail({ job }: JobDetailProps) {
  const router = useRouter()
  const [isSaved, setIsSaved] = useState(false)

  const handleBackClick = () => {
    router.push('/jobs')
  }

  const handleApplyClick = () => {
    if (job.application_url) {
      window.open(job.application_url, '_blank', 'noopener,noreferrer')
    } else {
      // Fallback action if no application URL
      alert('Application process would start here...')
    }
  }

  const handleSaveClick = () => {
    setIsSaved(!isSaved)
    // Here you would typically make an API call to save the job
    console.log(`${isSaved ? 'Unsaving' : 'Saving'} job:`, job.id)
  }

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: `${job.title} at ${job.company}`,
        text: `Check out this job opportunity: ${job.title} at ${job.company}`,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            className="flex items-center gap-2"
            onClick={handleBackClick}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Jobs
          </Button>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2"
              onClick={handleSaveClick}
            >
              <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-current' : ''}`} />
              {isSaved ? 'Saved' : 'Save'}
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2"
              onClick={handleShareClick}
            >
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>

        {/* Main Job Card */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex items-start gap-4 flex-1">
                <Image
                  src={job.image_url}
                  alt={job.company}
                  width={80}
                  height={80}
                  className="rounded-xl border bg-background p-2 object-contain flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                    {job.title}
                  </h1>
                  <div className="flex items-center gap-4 flex-wrap mb-2">
                    <div className="flex items-center text-muted-foreground">
                      <Building2 className="h-4 w-4 mr-2" />
                      <span className="font-medium">{job.company}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{job.location}</span>
                    </div>
                    {job.remote_policy && (
                      <div className="flex items-center text-muted-foreground">
                        <Globe className="h-4 w-4 mr-2" />
                        <span className="capitalize">{job.remote_policy}</span>
                      </div>
                    )}
                  </div>
                  {job.created_at && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      Posted on {formatDate(job.created_at)}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col gap-3 min-w-[200px]">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={handleApplyClick}
                >
                  Apply Now
                </Button>
                {job.application_url && (
                  <Button variant="outline" size="lg" asChild>
                    <a 
                      href={job.application_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Company Website
                    </a>
                  </Button>
                )}
              </div>
            </div>

            {/* Quick Info Badges */}
            <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t">
              <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1">
                <Clock className="h-4 w-4" />
                {job.type}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1">
                <DollarSign className="h-4 w-4" />
                {job.salary}
              </Badge>
              {job.experience_level && (
                <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1">
                  <Briefcase className="h-4 w-4" />
                  {job.experience_level}
                </Badge>
              )}
              {job.category && (
                <Badge variant="outline" className="px-3 py-1">
                  {job.category}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Description */}
            {job.description && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Job Description
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {typeof job.description === 'string' ? (
                    <div 
                      className="prose prose-slate max-w-none dark:prose-invert prose-p:text-muted-foreground prose-li:text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: job.description }}
                    />
                  ) : (
                    <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Requirements */}
            {job.requirements && job.requirements.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Company Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">About {job.company}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={job.image_url}
                    alt={job.company}
                    width={50}
                    height={50}
                    className="rounded-lg border bg-background p-1 object-contain flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <h3 className="font-semibold truncate">{job.company}</h3>
                    <p className="text-sm text-muted-foreground truncate">{job.location}</p>
                  </div>
                </div>
                {job.application_url && (
                  <Button variant="outline" className="w-full" asChild>
                    <a 
                      href={job.application_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Visit Company Website
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Job Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Job Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Job Type</span>
                  <span className="font-medium capitalize">{job.type}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium text-right max-w-[120px] truncate">{job.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Salary</span>
                  <span className="font-medium text-green-600 dark:text-green-400">
                    {job.salary}
                  </span>
                </div>
                {job.experience_level && (
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Experience</span>
                    <span className="font-medium capitalize">{job.experience_level}</span>
                  </div>
                )}
                {job.remote_policy && (
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Remote Policy</span>
                    <span className="font-medium capitalize">{job.remote_policy}</span>
                  </div>
                )}
                {job.created_at && (
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Date Posted</span>
                    <span className="font-medium text-sm">{formatDate(job.created_at)}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Benefits */}
            {job.benefits && job.benefits.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Benefits & Perks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {job.benefits.map((benefit, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                      >
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Fixed Apply Button for Mobile */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t">
          <div className="max-w-6xl mx-auto">
            <Button 
              size="lg" 
              className="w-full bg-primary hover:bg-primary/90"
              onClick={handleApplyClick}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}