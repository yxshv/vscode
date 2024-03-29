export function breakpoint(point: keyof typeof breakpoints = "lg") {
  console.log(
    breakpoint,
    window.innerWidth,
    breakpoints[point],
    window.innerWidth < breakpoints[point],
  );
  return window.innerWidth >= breakpoints[point];
}

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};
