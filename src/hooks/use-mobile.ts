import { useMediaQuery } from 'usehooks-ts';
import { breakpoints } from '../config/breakpoints';

export function useIsMobile() {
  return useMediaQuery(`(max-width: ${breakpoints.md - 1}px)`);
}

export function useIsTablet() {
  return useMediaQuery(
    `(min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg - 1}px)`
  );
}

export function useIsDesktop() {
  return useMediaQuery(`(min-width: ${breakpoints.lg}px)`);
}
