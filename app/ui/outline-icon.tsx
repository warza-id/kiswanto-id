import type { ReactNode, SVGProps } from "react";

type IconName = "arrow" | "code" | "database" | "graduation" | "briefcase" | "document" | "download" | "award";
const paths: Record<IconName, ReactNode> = {
  arrow: <path d="M7 17 17 7M7 7h10v10" />,
  code: <path d="m7 5-6 7 6 7m10-14 6 7-6 7M14 3l-4 18" />,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></>,
  graduation: <path d="m1 9 11-6 11 6-11 6L1 9Zm4 2.2v6.3c4 3.3 10 3.3 14 0v-6.3M23 9v9" />,
  briefcase: <><rect x="2" y="7" width="20" height="15" rx="2" /><path d="M8 7V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3M2 13h20M8 11v4m8-4v4" /></>,
  document: <path d="M5 2h10l5 5v15H5V2Zm10 0v6h5M8 12h9m-9 4h9m-9 3h9" />,
  download: <path d="M12 3v12m-5-5 5 5 5-5M4 21h16" />,
  award: <><circle cx="12" cy="9" r="6" /><path d="m8.5 14-1.5 8 5-3 5 3-1.5-8" /></>,
};

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {paths[name]}
    </svg>
  );
}
