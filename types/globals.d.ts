declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    plausible?: (...args: any[]) => void
    sa_event?: (...args: any[]) => void
    disqus_config?: () => void
    DISQUS?: { reset: (options: { reload: boolean }) => void }
  }
}

export {}
