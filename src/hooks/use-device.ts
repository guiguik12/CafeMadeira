import { useIsMobile, useIsTablet, useIsDesktop } from './use-mobile';

export function useDevice() {
  return {
    isMobile: useIsMobile(),
    isTablet: useIsTablet(),
    isDesktop: useIsDesktop(),
  };
}
