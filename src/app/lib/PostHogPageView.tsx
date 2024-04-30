// lib/posthog-pageview.tsx
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { usePostHog } from 'posthog-js/react';
import { useAuth, useUser } from '@clerk/nextjs';

const PostHogPageView = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();
  const { isSignedIn, userId } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    if (pathname && posthog) {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url = url + `?${searchParams.toString()}`;
      }
      posthog.capture('$pageview', {
        $current_url: url,
      });
      // if(isSignedIn && userId && user && !posthog._isIdentified()) {
      //   posthog.identify(userId, {
      //     email: user.primaryEmailAddress?.emailAddress,
      //     username: user.username,
      //   })
      // }
    }
  }, [pathname, searchParams, posthog]);

  useEffect(() => {
    console.log('isSignedIn', isSignedIn)
    console.log('userId', userId)
    console.log('user', user)
    console.log('posthog._isIdentified', posthog._isIdentified())
    if(isSignedIn && userId && user && !posthog._isIdentified()) {
      console.log("IDENTIFYING!!!")
      posthog.identify(userId, {
        email: user.primaryEmailAddress?.emailAddress,
        username: user.username,
      })
    }
  }, [posthog, user])

  return null;
};
export default PostHogPageView;