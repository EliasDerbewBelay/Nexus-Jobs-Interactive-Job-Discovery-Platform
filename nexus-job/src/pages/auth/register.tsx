import { useState } from 'react'
import Link from 'next/link'

export default function RegisterPage() {
  const [role, setRole] = useState<'jobseeker' | 'company'>('jobseeker')

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 px-4 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-2xl space-y-8 rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="mb-3 text-4xl font-bold text-gray-900 dark:text-white">
            Join Our Professional Network
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Create your account to access exclusive opportunities and connect
            with{' '}
            {role === 'jobseeker' ? 'top employers' : 'talented professionals'}
          </p>
        </div>

        {/* Role Selection */}
        <div className="rounded-xl bg-gray-50 p-6 dark:bg-gray-700">
          <h2 className="mb-4 text-center text-lg font-semibold text-gray-800 dark:text-white">
            I am a...
          </h2>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setRole('jobseeker')}
              className={`flex w-48 flex-col items-center justify-center rounded-xl border-2 p-6 transition-all duration-200 ${
                role === 'jobseeker'
                  ? 'border-indigo-500 bg-indigo-50 shadow-md dark:bg-indigo-900/20'
                  : 'border-gray-200 hover:border-indigo-300 dark:border-gray-600 dark:hover:border-indigo-400'
              }`}
            >
              <div
                className={`mb-2 text-2xl ${role === 'jobseeker' ? 'text-indigo-600' : 'text-gray-400'}`}
              >
                👨‍💼
              </div>
              <span
                className={`font-medium ${role === 'jobseeker' ? 'text-indigo-700 dark:text-indigo-300' : 'text-gray-600 dark:text-gray-400'}`}
              >
                Job Seeker
              </span>
              <p className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">
                Find your dream job
              </p>
            </button>

            <button
              onClick={() => setRole('company')}
              className={`flex w-48 flex-col items-center justify-center rounded-xl border-2 p-6 transition-all duration-200 ${
                role === 'company'
                  ? 'border-indigo-500 bg-indigo-50 shadow-md dark:bg-indigo-900/20'
                  : 'border-gray-200 hover:border-indigo-300 dark:border-gray-600 dark:hover:border-indigo-400'
              }`}
            >
              <div
                className={`mb-2 text-2xl ${role === 'company' ? 'text-indigo-600' : 'text-gray-400'}`}
              >
                🏢
              </div>
              <span
                className={`font-medium ${role === 'company' ? 'text-indigo-700 dark:text-indigo-300' : 'text-gray-600 dark:text-gray-400'}`}
              >
                Employer
              </span>
              <p className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">
                Hire top talent
              </p>
            </button>
          </div>
        </div>

        {/* Role-specific benefits */}
        <div className="rounded-xl border border-blue-100 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
          <h3 className="mb-2 flex items-center gap-2 font-semibold text-blue-800 dark:text-blue-300">
            <span>✨</span>
            {role === 'jobseeker'
              ? 'Benefits for Job Seekers:'
              : 'Benefits for Employers:'}
          </h3>
          <ul className="space-y-1 text-sm text-blue-700 dark:text-blue-400">
            {role === 'jobseeker' ? (
              <>
                <li>• Access to exclusive job opportunities</li>
                <li>• Personalized job recommendations</li>
                <li>• Connect directly with employers</li>
                <li>• Build your professional profile</li>
              </>
            ) : (
              <>
                <li>• Post unlimited job listings</li>
                <li>• Access to qualified candidates</li>
                <li>• Advanced candidate filtering</li>
                <li>• Company profile visibility</li>
              </>
            )}
          </ul>
        </div>

        {/* Main Form */}
        <form className="space-y-6">
          {/* Account Information Section */}
          <div className="border-b border-gray-200 pb-6 dark:border-gray-600">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-white">
              <span className="text-indigo-500">🔐</span>
              Account Information
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name *
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 transition-all outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-indigo-500/20"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address *
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 transition-all outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-indigo-500/20"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password *
                </label>
                <input
                  type="password"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 transition-all outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-indigo-500/20"
                  placeholder="Create a strong password"
                  required
                />
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  Minimum 8 characters with letters and numbers
                </p>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 transition-all outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-indigo-500/20"
                  placeholder="Re-enter your password"
                  required
                />
              </div>
            </div>
          </div>

          {/* Role-specific Information */}
          <div className="border-b border-gray-200 pb-6 dark:border-gray-600">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-white">
              <span className="text-green-500">💼</span>
              {role === 'jobseeker'
                ? 'Professional Profile'
                : 'Company Information'}
              <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                (Optional - can be added later)
              </span>
            </h2>

            {role === 'jobseeker' ? (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <input
                    type="text"
                    placeholder="CV/Resume URL (LinkedIn, Google Drive, etc.)"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 transition-all outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-indigo-500/20"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Skills (e.g. React, Node.js, Python)"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 transition-all outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-indigo-500/20"
                  />
                </div>

                <div>
                  <select className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 transition-all outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-indigo-500/20">
                    <option value="">Experience Level</option>
                    <option value="Intern">Intern</option>
                    <option value="Entry-Level">Entry-Level (0-2 years)</option>
                    <option value="Mid-Level">Mid-Level (3-5 years)</option>
                    <option value="Senior">Senior (6+ years)</option>
                    <option value="Lead">Lead/Manager</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <textarea
                    placeholder="Professional summary or bio (max 250 characters)"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 transition-all outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-indigo-500/20"
                    rows={3}
                    maxLength={250}
                  ></textarea>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <input
                    type="text"
                    placeholder="Company Legal Name *"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 transition-all outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-indigo-500/20"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Company Logo URL"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 transition-all outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-indigo-500/20"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Industry"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 transition-all outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-indigo-500/20"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Headquarters Location"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 transition-all outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-indigo-500/20"
                  />
                </div>

                <div className="md:col-span-2">
                  <textarea
                    placeholder="Company description and mission"
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 transition-all outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-indigo-500/20"
                    rows={3}
                  ></textarea>
                </div>
              </div>
            )}
          </div>

          {/* Terms and Submit */}
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                required
              />
              <label
                htmlFor="terms"
                className="ml-2 text-sm text-gray-600 dark:text-gray-400"
              >
                I agree to the{' '}
                <Link
                  href="/terms"
                  className="text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link
                  href="/privacy"
                  className="text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 py-4 font-semibold text-white shadow-lg transition-all hover:from-indigo-700 hover:to-purple-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Create {role === 'jobseeker' ? 'Professional' : 'Company'} Account
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link href="/auth/login">
              <span className="cursor-pointer font-semibold text-indigo-600 hover:underline dark:text-indigo-400">
                Sign in here
              </span>
            </Link>
          </p>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
            By creating an account, you agree to our platform guidelines and
            community standards.
          </p>
        </div>
      </div>
    </div>
  )
}
