import {
  ArrowRightIcon,
  FileTextIcon,
  GitHubLogoIcon,
  InfoCircledIcon,
  LinkedInLogoIcon,
  MoonIcon,
  PaperPlaneIcon,
  SunIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  sun: SunIcon,
  moon: MoonIcon,
  info: InfoCircledIcon,
  resume: FileTextIcon,
  mailbox: PaperPlaneIcon,
  twitter: TwitterLogoIcon,
  arrowRight: ArrowRightIcon,
  gitHub: GitHubLogoIcon,
  linkedin: LinkedInLogoIcon,
  logo: (props: IconProps) => (
    <svg
      viewBox="0 0 306 212"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M119.658 120.184C119.68 117.19 121.372 114.459 124.042 113.106L299.259 24.3168C301.932 22.9628 305.089 24.9183 305.067 27.9139L304.459 111.778C304.437 114.775 302.742 117.509 300.066 118.861L124.851 207.352C122.179 208.701 119.026 206.745 119.048 203.752L119.658 120.184Z"
        fill="currentColor"
      />
      <path
        d="M0.658434 100.184C0.680305 97.19 2.37172 94.4591 5.0421 93.1059L180.259 4.31683C182.932 2.96276 186.089 4.91833 186.067 7.91389L185.459 91.7776C185.437 94.7752 183.742 97.5091 181.066 98.8605L5.85102 187.352C3.17908 188.701 0.0260084 186.745 0.0478775 183.752L0.658434 100.184Z"
        fill="currentColor"
      />
      <rect
        x="257.5"
        y="162.5"
        width="47"
        height="47"
        rx="23.5"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
};
