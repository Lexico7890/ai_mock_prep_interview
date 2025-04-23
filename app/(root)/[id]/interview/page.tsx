import Agent from '@/components/Agent'
import { isAuthenticated } from '@/lib/actions/authSupabase.action';
import React from 'react'

const page = async () => {
  const { user } = await isAuthenticated()
  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <>
      <h3>Interview generation</h3>

      <Agent
        userName={user?.user_metadata?.name}
        userId={user?.id}
        type="generate"
      />
    </>
  )
}

export default page
