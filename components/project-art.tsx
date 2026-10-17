import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";
import artwork from "@/content/en/project-art.json";
import {
  CodeIcon,
  CpuIcon,
  HeartIcon,
  PlantIcon,
  GlobeHemisphereWestIcon,
  PlayIcon,
  BookOpenIcon,
  ShieldCheckIcon,
  CheckIcon,
  FolderIcon,
} from "@phosphor-icons/react/ssr";
import type { ReactNode } from "react";
function Scene({ kind }: { kind: string }) {
  switch (kind) {
    case "thabat":
      return (
        <g transform="rotate(-5 190 130)">
          <path
            d="M91 76q47-17 101 7 54-24 101-7v129q-47-17-101 7-54-24-101-7z"
            fill="#fffdf9"
          />
          <path d="M192 83v129" />
          <path
            d="M114 105q27-5 53 4m-53 14q27-5 53 4m-53 14q27-5 53 4m47-40q27-10 53-4m-53 23q27-10 53-4m-53 23q27-10 53-4"
            opacity=".35"
          />
          <path
            d="M199 94c13-19 31-37 37-45 12 28-8 46-37 45z"
            fill="var(--art-accent)"
          />
          <path
            d="M197 94c-21-1-35-12-29-31 15 2 24 14 29 31"
            fill="var(--art-soft)"
          />
          <circle
            cx="286"
            cy="49"
            r="14"
            fill="var(--art-accent)"
            stroke="none"
          />
        </g>
      );
    case "car":
      return (
        <g>
          <path d="M45 211h290" strokeDasharray="6 9" opacity=".35" />
          <g transform="rotate(-6 190 130)">
            <rect
              x="96"
              y="83"
              width="196"
              height="92"
              rx="23"
              fill="var(--art-accent)"
            />
            <rect
              x="130"
              y="62"
              width="104"
              height="78"
              rx="10"
              fill="var(--art-soft)"
            />
            <path d="M182 62v78" />
            <circle cx="126" cy="179" r="24" fill="var(--art-ink)" />
            <circle cx="266" cy="179" r="24" fill="var(--art-ink)" />
            <circle cx="126" cy="179" r="10" fill="#fffdf9" />
            <circle cx="266" cy="179" r="10" fill="#fffdf9" />
            <rect
              x="250"
              y="102"
              width="26"
              height="26"
              rx="6"
              fill="#fffdf9"
            />
            <circle cx="263" cy="115" r="7" fill="var(--art-ink)" />
            <path
              d="M191 55v-18m-12-6q12-10 24 0m-32-10q20-17 40 0"
              fill="none"
            />
            <rect
              x="110"
              y="103"
              width="31"
              height="14"
              rx="4"
              fill="#fffdf9"
            />
          </g>
        </g>
      );
    case "drone":
      return (
        <g>
          <path d="M77 215h230" opacity=".2" />
          <ellipse
            cx="192"
            cy="209"
            rx="59"
            ry="8"
            fill="var(--art-ink)"
            stroke="none"
            opacity=".07"
          />
          <g transform="rotate(-7 190 120)">
            <path
              d="m133 80 118 81m-118 0 118-81"
              stroke="var(--art-ink)"
              strokeWidth="12"
            />
            <g fill="var(--art-soft)">
              {[
                [128, 76],
                [256, 76],
                [128, 168],
                [256, 168],
              ].map(([cx, cy]) => (
                <ellipse key={`${cx}-${cy}`} cx={cx} cy={cy} rx="41" ry="12" />
              ))}
            </g>
            <rect
              x="159"
              y="96"
              width="67"
              height="55"
              rx="17"
              fill="var(--art-accent)"
            />
            <rect
              x="179"
              y="151"
              width="26"
              height="18"
              rx="6"
              fill="#fffdf9"
            />
            <circle cx="192" cy="160" r="4" />
            <path d="m180 116 12 8 12-8" stroke="#fffdf9" strokeWidth="3" />
            <path d="M183 82q9-9 18 0m-25-10q16-15 32 0" />
          </g>
        </g>
      );
    case "supermarket":
      return (
        <g transform="rotate(-4 190 130)">
          <rect x="78" y="46" width="185" height="124" rx="10" fill="#fffdf9" />
          <path d="M78 70h185" />
          <rect
            x="92"
            y="84"
            width="52"
            height="68"
            rx="5"
            fill="var(--art-soft)"
            stroke="none"
          />
          <path d="M101 101h34m-34 12h25m-25 12h29" opacity=".4" />
          <g fill="var(--art-accent)" stroke="none">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <rect
                key={i}
                x={159 + (i % 3) * 29}
                y={85 + Math.floor(i / 3) * 36}
                width="23"
                height="27"
                rx="3"
              />
            ))}
          </g>
          <path d="M160 170v22m-29 0h58" strokeWidth="5" />
          <rect
            x="228"
            y="135"
            width="79"
            height="65"
            rx="10"
            fill="var(--art-accent)"
          />
          <path d="M242 146v-36h50v36" fill="#fffdf9" />
          <path d="M250 123h32m-32 9h24" opacity=".4" />
          <path d="M242 176h50" stroke="#fffdf9" strokeWidth="4" />
          <path d="M91 211h215" opacity=".25" />
        </g>
      );
    default:
      return null;
  }
}
type ArtKind = keyof typeof artwork;
function BrowserChrome({
  kind,
  children,
}: {
  kind: ArtKind;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "illustrated-browser",
        "motion-reduce:[transition:none] motion-reduce:[translate:none]! motion-reduce:[rotate:none]! motion-reduce:[scale:none]!",
        "overflow-hidden rounded-[9px] border border-solid border-[#8197a9] absolute w-[81%] max-w-105 top-[45%] left-1/2 transform-[translate(-50%,_-50%)_rotate(-6deg)_scale(0.9)] bg-[#f9fbff] shadow-[9px_13px_0_color-mix(in_srgb,_var(--art-accent)_17%,_transparent)] [transition:translate_0.35s,_rotate_0.35s,_scale_0.35s]",
        "min-[650px]:w-[76%]",
      )}
    >
      <div
        className={cn(
          "illustrated-browser-bar",
          "px-2.5 py-2 gap-2.5 border-b [border-bottom-style:solid] border-b-[#d7dfeb] flex items-center justify-between bg-white",
          "[&>span:first-child]:gap-1 [&>span:first-child]:flex",
          "[&_i]:rounded-[50%] [&_i]:size-1 [&_i]:bg-(--art-accent) [&_i]:opacity-70",
          "[&_small]:text-[7px] [&_small]:[font-family:monospace] [&_small]:font-normal [&_small]:not-italic [&_small]:[line-height:normal] [&_small]:text-[#7d8a9f]",
        )}
      >
        <span>
          <i />
          <i />
          <i />
        </span>
        <small>{artwork[kind].window}</small>
        <span className={cn("browser-bar-menu", "text-[9px] leading-[4px]")}>
          ···
        </span>
      </div>
      {children}
    </div>
  );
}
function Dashboard({ kind }: { kind: ArtKind }) {
  const text = artwork[kind];
  const documentation = kind === "fatih";
  return (
    <BrowserChrome kind={kind}>
      <div
        className={cn(
          "illustrated-dashboard",
          "p-[13px] gap-3.5 grid grid-cols-[26px_minmax(0,_1fr)] h-[155px]",
        )}
      >
        <div
          className={cn(
            "illustrated-sidebar",
            "gap-3.5 border-r [border-right-style:solid] border-r-[#d7dfeb] flex flex-col pt-0.5",
            "[&_svg]:size-[17px] [&_svg]:text-(--art-accent)",
            "[&_i]:rounded-[2px] [&_i]:w-3.5 [&_i]:h-[3px] [&_i]:bg-[#c7d3e8]",
          )}
        >
          {documentation ? <FolderIcon /> : <CodeIcon />}
          <i />
          <i />
          <i />
          <i />
        </div>
        <div
          className={cn(
            "illustrated-dashboard-main",
            "[&>strong]:font-heading [&>strong]:text-[15px] [&>strong]:tracking-[-0.4px]",
          )}
        >
          <strong>{text.heading}</strong>
          <div
            className={cn(
              "illustrated-stat-row",
              "gap-[7px] grid grid-cols-[repeat(3,_minmax(0,_1fr))] mt-[11px]",
              "[&>div]:p-1.5 [&>div]:rounded-[4px] [&>div]:bg-[#e7ecfb]",
              "[&>div:nth-child(2)]:bg-[#f6df94]",
              "[&>div:nth-child(3)]:bg-(--art-soft)",
              "[&_span]:block [&_span]:text-[7px] [&_span]:whitespace-nowrap",
              "[&_b]:text-[13px] [&_b]:block [&_b]:mt-[3px] [&_b]:font-medium",
            )}
          >
            {text.labels.map((label, i) => (
              <div key={label}>
                <span>{label}</span>
                <b>{["✳", "↗", "···"][i]}</b>
              </div>
            ))}
          </div>
          {documentation ? (
            <div
              className={cn(
                "illustrated-records",
                "gap-[7px] grid mt-[13px]",
                "[&>div]:gap-[7px] [&>div]:flex [&>div]:items-center",
                "[&_span]:rounded-[2px] [&_span]:size-[11px] [&_span]:bg-(--art-soft)",
                "[&_i]:h-[3px] [&_i]:w-[42%] [&_i]:bg-[#d7dfeb]",
                "[&_i:nth-child(3)]:w-[20%]",
                "[&_svg]:size-2.5 [&_svg]:text-(--art-accent) [&_svg]:ml-auto",
              )}
            >
              {[0, 1, 2].map((i) => (
                <div key={i}>
                  <span />
                  <i />
                  <i />
                  <ShieldCheckIcon />
                </div>
              ))}
            </div>
          ) : (
            <svg
              className={cn(
                "illustrated-graph",
                "w-full h-12 mt-2 text-(--art-accent)",
              )}
              viewBox="0 0 260 60"
              fill="none"
            >
              <path
                d="M0 15h260M0 35h260M0 55h260"
                stroke="currentColor"
                opacity=".1"
              />
              <path
                d="M0 52 25 40 45 46 70 23 95 33 120 17 145 28 170 8 195 22 220 5 240 16 260 1"
                stroke="currentColor"
                strokeWidth="2.5"
              />
            </svg>
          )}
        </div>
      </div>
    </BrowserChrome>
  );
}
function Website({ kind }: { kind: ArtKind }) {
  const text = artwork[kind];
  const Icon =
    kind === "mun"
      ? GlobeHemisphereWestIcon
      : kind === "education"
        ? BookOpenIcon
        : HeartIcon;
  return (
    <BrowserChrome kind={kind}>
      <div
        className={cn(
          "illustrated-site-nav",
          "mx-3.5 gap-2 flex items-center mt-2.5 mb-0",
          "[&_b]:text-[8px] [&_b]:mr-auto [&_b]:text-(--art-accent)",
          "[&>span]:w-[17px] [&>span]:h-0.5 [&>span]:bg-[#d7dfeb]",
          "[&>i]:rounded-[4px] [&>i]:w-[23px] [&>i]:h-2 [&>i]:bg-(--art-soft)",
        )}
      >
        <b>{text.window}</b>
        <span />
        <span />
        <i />
      </div>
      <div
        className={cn(
          "illustrated-site-hero",
          "px-[13px] py-2.5 gap-2.5 flex items-center",
          "min-[650px]:px-4.5 min-[650px]:py-3 min-[650px]:gap-[15px]",
          "[&>div:first-child]:flex-1",
          "[&_strong]:block [&_strong]:font-heading [&_strong]:text-[20px] [&_strong]:font-bold [&_strong]:tracking-[-0.8px] [&_strong]:leading-[1.1] [&_strong]:max-w-45",
          "min-[650px]:[&_strong]:text-[18px] min-[900px]:[&_strong]:text-[22px]",
        )}
      >
        <div>
          <strong>{text.heading}</strong>
          <span
            className={cn(
              "illustrated-text-line",
              "rounded-[2px] block w-[85%] h-[3px] bg-[#d7dfeb] mt-[9px]",
              "[&.short]:w-[65%] [&.short]:mt-1",
            )}
          />
          <span
            className={cn(
              "illustrated-text-line short",
              "rounded-[2px] block w-[85%] h-[3px] bg-[#d7dfeb] mt-[9px]",
              "[&.short]:w-[65%] [&.short]:mt-1",
            )}
          />
          <span
            className={cn(
              "illustrated-button",
              "px-2 py-[5px] gap-3 rounded-[4px] flex items-center justify-between w-fit min-w-[69px] mt-[9px] text-white bg-(--art-accent) text-[7px]",
            )}
          >
            {text.labels[0]}
            <span>↗</span>
          </span>
        </div>
        <div
          className={cn(
            "illustrated-site-symbol",
            "rounded-[50%] relative grid place-items-center size-15.5 shrink-0 bg-(--art-soft)",
            "min-[650px]:size-15 min-[900px]:size-21.5",
            "[&_svg]:size-[39px] [&_svg]:text-(--art-accent)",
            "min-[900px]:[&_svg]:size-[49px]",
            "[&_i]:rounded-[50%] [&_i]:border-[4px] [&_i]:border-solid [&_i]:border-[#f9fbff] [&_i]:absolute [&_i]:right-[-6px] [&_i]:top-3.5 [&_i]:size-4 [&_i]:bg-(--art-accent)",
            "[&_i:last-child]:top-auto [&_i:last-child]:right-auto [&_i:last-child]:bottom-1.5 [&_i:last-child]:left-0 [&_i:last-child]:size-[21px]",
          )}
        >
          <Icon weight="light" />
          <i />
          <i />
        </div>
      </div>
      <div
        className={cn(
          "illustrated-site-cards",
          "mx-3.5 gap-[7px] grid grid-cols-[repeat(3,_minmax(0,_1fr))] mt-0 mb-[13px]",
          "[&>div]:px-[7px] [&>div]:py-1.5 [&>div]:rounded-[5px] [&>div]:bg-[color-mix(in_srgb,_var(--art-soft)_40%,_white)]",
          "[&_span]:text-(--art-accent) [&_span]:text-[14px] [&_span]:leading-[1]",
          "[&_b]:text-[7px] [&_b]:block [&_b]:mt-1 [&_b]:font-medium",
          "[&_i]:block [&_i]:h-0.5 [&_i]:w-[65%] [&_i]:bg-(--art-soft) [&_i]:mt-[5px]",
        )}
      >
        {text.labels.map((label, i) => (
          <div key={label}>
            <span>{["✳", "◒", "↗"][i]}</span>
            <b>{label}</b>
            <i />
          </div>
        ))}
      </div>
    </BrowserChrome>
  );
}
function MediaWindow({ kind }: { kind: "media" | "lms" }) {
  const text = artwork[kind];
  return (
    <BrowserChrome kind={kind}>
      <div
        className={cn(
          "illustrated-media",
          "p-3 gap-[11px] grid grid-cols-[24px_minmax(0,_1fr)]",
          "[&_strong]:font-heading [&_strong]:text-[14px]",
        )}
      >
        <div
          className={cn(
            "illustrated-media-sidebar",
            "gap-3.5 border-r [border-right-style:solid] border-r-[#d7dfeb] flex flex-col",
            "[&>svg]:text-(--art-accent) [&>svg]:size-[13px]",
            "[&>i]:w-[13px] [&>i]:h-[3px] [&>i]:bg-(--art-soft)",
          )}
        >
          <PlayIcon weight="fill" />
          <i />
          <i />
          <i />
        </div>
        <div>
          <strong>{text.heading}</strong>
          <div
            className={cn(
              "illustrated-player",
              "overflow-hidden rounded-[5px] relative bg-[#2c3959] h-17.5 mt-2 grid place-items-center",
              "[&>svg]:text-[#fffdf9] [&>svg]:size-[19px] [&>svg]:relative",
              "[&>span]:rounded-[20px] [&>span]:absolute [&>span]:w-40 [&>span]:h-32.5 [&>span]:bg-(--art-soft) [&>span]:right-[-85px] [&>span]:top-2.5 [&>span]:transform-[rotate(-30deg)]",
              "[&>span:last-child]:rounded-[4px] [&>span:last-child]:w-[45px] [&>span:last-child]:h-[3px] [&>span:last-child]:bottom-2 [&>span:last-child]:left-3 [&>span:last-child]:top-auto [&>span:last-child]:transform-none [&>span:last-child]:bg-[#fff8]",
            )}
          >
            <div
              className={cn(
                "illustrated-poster-shape",
                "rounded-[50%] absolute size-32.5 bg-(--art-accent) left-[-20px] top-[-12px] transform-[rotate(30deg)]",
              )}
            />
            <PlayIcon weight="fill" />
            <span />
            <span />
          </div>
          <div
            className={cn(
              "illustrated-media-tiles",
              "gap-[7px] grid grid-cols-[repeat(3,_minmax(0,_1fr))] mt-2",
              "[&>div]:gap-[5px] [&>div]:flex [&>div]:items-center",
              "[&_i]:rounded-[3px] [&_i]:w-[19px] [&_i]:h-6 [&_i]:grid [&_i]:place-items-center [&_i]:bg-(--art-soft) [&_i]:text-(--art-accent) [&_i]:not-italic",
              "[&_small]:text-[6px]",
            )}
          >
            {text.labels.map((label, i) => (
              <div key={label}>
                <i>{["◒", "✳", "↗"][i]}</i>
                <small>{label}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}
function CommunityNote() {
  return (
    <div
      className={cn(
        "illustrated-community",
        "p-5.5 rounded-[9px] border border-solid border-[#b982a1] absolute top-[48%] left-1/2 transform-[translate(-50%,_-50%)_rotate(-7deg)] w-[72%] max-w-77.5 bg-[#fdf9fc] shadow-[11px_13px_0_#b67a9d29] [transition:translate_0.35s,_rotate_0.35s,_scale_0.35s]",
        "min-[650px]:p-[23px] min-[650px]:w-[65%]",
        "motion-reduce:[translate:none]! motion-reduce:[rotate:none]! motion-reduce:[scale:none]!",
        "[&>svg]:size-[27px] [&>svg]:text-(--art-accent) [&>svg]:mb-[7px]",
        "[&_strong]:block [&_strong]:font-heading [&_strong]:text-[24px] [&_strong]:leading-[1.1] [&_strong]:tracking-[-0.8px] [&_strong]:[white-space:pre-line]",
        "min-[650px]:[&_strong]:text-[25px]",
        "[&_small]:text-[7px] [&_small]:block [&_small]:text-[#8d6380] [&_small]:mt-2",
      )}
    >
      <HeartIcon weight="fill" />
      <strong>{artwork.promise.heading}</strong>
      <div
        className={cn(
          "illustrated-people",
          "flex mt-[15px] pl-[3px]",
          "[&_i]:rounded-[50%] [&_i]:border-[3px] [&_i]:border-solid [&_i]:border-[#fdf9fc] [&_i]:size-[21px] [&_i]:ml-[-3px] [&_i]:bg-[#c7d8f8]",
          "[&_i:nth-child(2)]:bg-[#e4b8cc]",
          "[&_i:nth-child(3)]:bg-[#bad9c9]",
          "[&_i:nth-child(4)]:bg-[#f6da7a]",
        )}
      >
        <i />
        <i />
        <i />
        <i />
      </div>
      <small>{artwork.promise.labels.join(" · ")}</small>
    </div>
  );
}
function Terminal({ kind }: { kind: "nix" | "rust" }) {
  return (
    <BrowserChrome kind={kind}>
      <div
        className={cn(
          "illustrated-terminal",
          "p-[13px] gap-2.5 grid grid-cols-[12px_minmax(0,_1fr)] bg-[#f7f9fc] [font:8px/1.9_monospace]",
        )}
      >
        <div className={cn("terminal-gutter", "text-[#b0bacb]")}>
          1<br />2<br />3<br />4<br />5<br />6
        </div>
        <div
          className={cn(
            "terminal-lines",
            "flex flex-col text-[#485b72]",
            "[&>b]:font-medium [&>b]:text-(--art-accent)",
            "[&>span]:[white-space:pre]",
          )}
        >
          {artwork[kind].code.map((line, i) => (
            <span
              key={i}
              className={
                i === 3 ? cn("terminal-highlight", "text-[#699480]") : undefined
              }
            >
              {line}
            </span>
          ))}
        </div>
      </div>
      <div
        className={cn(
          "illustrated-terminal-footer",
          "px-3 py-1.5 flex items-center justify-between bg-(--art-soft) text-[#294a6b] text-[6px] [font-family:monospace] font-normal not-italic [line-height:normal]",
          "[&>span]:gap-1 [&>span]:flex [&>span]:items-center",
          "[&_i]:rounded-[50%] [&_i]:size-1 [&_i]:bg-[#5f9a7f]",
          "[&_svg]:size-[9px]",
        )}
      >
        <span>
          <i />
          {artwork[kind].labels[0]}
        </span>
        <span>
          {artwork[kind].command}
          <CheckIcon />
        </span>
      </div>
    </BrowserChrome>
  );
}

// Layered paper, tiny interfaces, and connected objects echo the original desk artwork.
export function ProjectArt({ kind }: { kind: Project["art"] }) {
  const key = kind as ArtKind;
  const text = artwork[key];
  const hardware = ["car", "drone", "supermarket"].includes(key);
  return (
    <div
      className={cn(
        "project-art project-illustration",
        "overflow-hidden h-55 grid place-items-center relative text-object-ink shrink-0 [--art-ink:#233659] [--art-accent:#3555d8] [--art-soft:#b7c9f2] bg-[#d7e2fc]",
        "min-[900px]:h-[195px] min-[1150px]:h-[225px]",
        "[&:where([data-art='insanps'])]:[--art-accent:#047974] [&:where([data-art='insanps'])]:[--art-soft:#9cd5cd] [&:where([data-art='insanps'])]:bg-[#d4ece6]",
        "[&:where([data-art='fatih'])]:[--art-accent:#8b7130] [&:where([data-art='fatih'])]:[--art-soft:#e9d68f] [&:where([data-art='fatih'])]:bg-[#f4eac7]",
        "[&:where([data-art='car'])]:[--art-accent:#426bc1] [&:where([data-art='car'])]:[--art-soft:#c1d8f0] [&:where([data-art='car'])]:bg-[#dbeaf6]",
        "[&:where([data-art='promise'])]:[--art-accent:#ae567c] [&:where([data-art='promise'])]:[--art-soft:#e9b7cf] [&:where([data-art='promise'])]:bg-[#f0d9e5]",
        "[&:where([data-art='thabat'])]:[--art-accent:#507f68] [&:where([data-art='thabat'])]:[--art-soft:#b5d4bf] [&:where([data-art='thabat'])]:bg-[#d6e8db]",
        "[&:where([data-art='mun'])]:[--art-accent:#5575b3] [&:where([data-art='mun'])]:[--art-soft:#bbd4ec] [&:where([data-art='mun'])]:bg-[#dfebf7]",
        "[&:where([data-art='drone'])]:[--art-accent:#cd7662] [&:where([data-art='drone'])]:[--art-soft:#efb6a4] [&:where([data-art='drone'])]:bg-[#f7e0d4]",
        "[&:where([data-art='supermarket'])]:[--art-accent:#558375] [&:where([data-art='supermarket'])]:[--art-soft:#c2dfce] [&:where([data-art='supermarket'])]:bg-[#e0eee3]",
        "[&:where([data-art='education'])]:[--art-accent:#8571ad] [&:where([data-art='education'])]:[--art-soft:#d0c2e9] [&:where([data-art='education'])]:bg-[#ebe3f5]",
        "[&:where([data-art='media'])]:[--art-accent:#8971bc] [&:where([data-art='media'])]:[--art-soft:#cfc0e9] [&:where([data-art='media'])]:bg-[#e7e0f5]",
        "[&:where([data-art='nix'])]:[--art-accent:#517ca9] [&:where([data-art='nix'])]:[--art-soft:#b7d3e6] [&:where([data-art='nix'])]:bg-[#deedf4]",
        "[&:where([data-art='rust'])]:[--art-accent:#b66b4c] [&:where([data-art='rust'])]:[--art-soft:#ebbf9f] [&:where([data-art='rust'])]:bg-[#f6e4d3]",
        "[&:where([data-art='lms'])]:[--art-accent:#699683] [&:where([data-art='lms'])]:[--art-soft:#c0d8c9] [&:where([data-art='lms'])]:bg-[#e0ebe3]",
        "[&:where([data-art='fatih'])_.illustrated-browser]:transform-[translate(-50%,_-50%)_rotate(5deg)_scale(0.9)]",
        "[&:where([data-art='mun'])_.illustrated-browser]:transform-[translate(-50%,_-50%)_rotate(5deg)_scale(0.9)]",
        "[&:where([data-art='lms'])_.illustrated-browser]:transform-[translate(-50%,_-50%)_rotate(5deg)_scale(0.9)]",
        "[&:where([data-art='car'])_.illustrated-object]:left-[58%] [&:where([data-art='car'])_.illustrated-object]:w-[69%]",
        "[&:where([data-art='drone'])_.illustrated-object]:left-[58%] [&:where([data-art='drone'])_.illustrated-object]:w-[69%]",
        "[&:where([data-art='drone'])_.hardware-module]:left-[15%] [&:where([data-art='drone'])_.hardware-module]:top-[47%] [&:where([data-art='drone'])_.hardware-module]:transform-[rotate(8deg)] [&:where([data-art='drone'])_.hardware-module]:w-15.5 [&:where([data-art='drone'])_.hardware-module]:h-[69px]",
        "[&:where([data-art='supermarket'])_.hardware-module]:left-[12%] [&:where([data-art='supermarket'])_.hardware-module]:top-[52%] [&:where([data-art='supermarket'])_.hardware-module]:w-15.5 [&:where([data-art='supermarket'])_.hardware-module]:h-17",
      )}
      data-art={key}
      aria-hidden="true"
    >
      <div
        className={cn(
          "art-orbit orbit-one",
          "rounded-[50%] absolute pointer-events-none size-[195px] bg-(--art-soft) opacity-35 top-1/2 left-1/2 transform-[translate(-50%,_-50%)]",
        )}
      />
      <div
        className={cn(
          "art-orbit orbit-two",
          "rounded-[50%] absolute pointer-events-none border border-dashed border-(--art-accent) size-[265px] opacity-12 top-1/2 left-1/2 transform-[translate(-50%,_-50%)_rotate(10deg)]",
        )}
      />
      {key === "portfolio" || key === "fatih" ? (
        <Dashboard kind={key} />
      ) : ["insanps", "mun", "education"].includes(key) ? (
        <Website kind={key} />
      ) : key === "media" || key === "lms" ? (
        <MediaWindow kind={key} />
      ) : key === "promise" ? (
        <CommunityNote />
      ) : key === "nix" || key === "rust" ? (
        <Terminal kind={key} />
      ) : (
        <div
          className={cn(
            "illustrated-object",
            "absolute w-[77%] max-w-97.5 top-[46%] left-[53%] transform-[translate(-50%,_-50%)_rotate(1deg)] [filter:drop-shadow(7px_10px_0_color-mix(in_srgb,_var(--art-accent)_14%,_transparent))] [transition:translate_0.35s,_rotate_0.35s,_scale_0.35s]",
            "motion-reduce:[translate:none]! motion-reduce:[rotate:none]! motion-reduce:[scale:none]!",
            "[&>svg]:w-full [&>svg]:h-auto",
          )}
        >
          <svg
            viewBox="30 0 324 256"
            fill="none"
            stroke="var(--art-ink)"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            focusable="false"
          >
            <Scene kind={key} />
          </svg>
        </div>
      )}
      {hardware && (
        <div
          className={cn(
            "hardware-module",
            "rounded-[6px] border border-solid border-(--art-accent) absolute left-[8%] top-[29%] transform-[rotate(-9deg)] w-16 h-18 bg-[#d1e6dc] shadow-[6px_7px_0_#355c4d19] flex items-center justify-center flex-col [transition:translate_0.35s,_rotate_0.35s,_scale_0.35s]",
            "min-[650px]:left-[12%] min-[650px]:w-20 min-[650px]:h-21.5",
            "motion-reduce:[translate:none]! motion-reduce:[rotate:none]! motion-reduce:[scale:none]!",
            "before:content-[''] before:absolute before:w-[45px] before:h-[3px] before:[background:repeating-linear-gradient(90deg,_#79978a_0_3px,_transparent_3px_7px)] before:left-[9px] before:top-[-4px]",
            "min-[650px]:before:w-14.5 min-[650px]:before:left-2.5",
            "after:content-[''] after:absolute after:w-[45px] after:h-[3px] after:[background:repeating-linear-gradient(90deg,_#79978a_0_3px,_transparent_3px_7px)] after:left-[9px] after:top-auto after:bottom-[-4px]",
            "min-[650px]:after:w-14.5 min-[650px]:after:left-2.5",
            "[&>svg]:p-1 [&>svg]:rounded-[3px] [&>svg]:size-[33px] [&>svg]:bg-[#334d49] [&>svg]:text-[#d1e6dc]",
            "[&_small]:text-[7px] [&_small]:[font-family:monospace] [&_small]:font-normal [&_small]:not-italic [&_small]:[line-height:normal] [&_small]:text-[#334d49] [&_small]:mt-2",
          )}
        >
          <div
            className={cn(
              "hardware-pins",
              "rounded-[3px] border border-solid border-[#79978a] absolute w-[47px] h-12.5",
              "min-[650px]:w-[57px] min-[650px]:h-14.5",
            )}
          />
          <CpuIcon weight="light" />
          <small>{key === "supermarket" ? "RPi" : "ESP32"}</small>
          <div
            className={cn(
              "hardware-led",
              "rounded-[50%] size-1 absolute top-[9px] right-[9px] bg-[#ddad48] shadow-[0_0_5px_#e8c87b]",
            )}
          />
        </div>
      )}
      {key === "thabat" && (
        <div
          className={cn(
            "art-book-note",
            "p-3.5 rounded-[4px] border border-solid border-[#96b49f] absolute left-[16%] top-[28%] w-[115px] bg-[#fffdf9] transform-[rotate(-11deg)] shadow-[5px_7px_0_#507f681a] [transition:translate_0.35s,_rotate_0.35s,_scale_0.35s]",
            "motion-reduce:[translate:none]! motion-reduce:[rotate:none]! motion-reduce:[scale:none]!",
            "[&>svg]:size-5.5 [&>svg]:text-(--art-accent)",
            "[&_strong]:mx-0 [&_strong]:my-[3px] [&_strong]:block [&_strong]:text-[28px]",
            "[&_small]:text-[6px] [&_small]:whitespace-nowrap",
          )}
        >
          <PlantIcon />
          <strong lang="ar" dir="rtl">
            {text.heading}
          </strong>
          <small>{text.labels.join(" · ")}</small>
        </div>
      )}
      <span
        className={cn(
          "art-sticker",
          "px-2.5 py-[7px] gap-[5px] rounded-[5px] border border-solid border-[color-mix(in_srgb,_var(--art-accent)_35%,_transparent)] absolute top-[21px] right-[17px] flex items-center text-[9px] bg-[#fffdf9] shadow-[3px_4px_0_color-mix(in_srgb,_var(--art-accent)_12%,_transparent)] transform-[rotate(9deg)] [transition:translate_0.35s,_rotate_0.35s,_scale_0.35s]",
          "min-[650px]:top-6.5 min-[650px]:right-[25px]",
          "motion-reduce:[translate:none]! motion-reduce:[rotate:none]! motion-reduce:[scale:none]!",
          "[&>svg]:size-3 [&>svg]:text-(--art-accent)",
          "[&>span]:text-(--art-accent) [&>span]:text-[13px] [&>span]:leading-[1]",
        )}
      >
        {key === "fatih" ? (
          <ShieldCheckIcon />
        ) : key === "promise" || key === "insanps" ? (
          <HeartIcon weight="fill" />
        ) : key === "nix" || key === "rust" ? (
          <CodeIcon />
        ) : (
          <span>✳</span>
        )}
        {text.sticker}
      </span>
      <span
        className={cn(
          "art-caption",
          "absolute bottom-[15px] left-0 w-full text-center text-[9px] italic text-(--art-accent) transform-[rotate(-2deg)]",
          "min-[650px]:text-[10px] max-[650px]:px-4",
        )}
      >
        {hardware ? text.heading : text.caption}
      </span>
      <span
        className={cn(
          "art-spark spark-one",
          "absolute text-(--art-accent) text-[30px] leading-[1] [transition:translate_0.35s,_rotate_0.35s,_scale_0.35s] bottom-[43px] right-[29px] transform-[rotate(10deg)]",
          "motion-reduce:[translate:none]! motion-reduce:[rotate:none]! motion-reduce:[scale:none]!",
        )}
      >
        ✳
      </span>
      <span
        className={cn(
          "art-spark spark-two",
          "absolute text-(--art-accent) text-[30px] leading-[1] [transition:translate_0.35s,_rotate_0.35s,_scale_0.35s] left-7 top-[33px] text-[17px] leading-[1]",
          "motion-reduce:[translate:none]! motion-reduce:[rotate:none]! motion-reduce:[scale:none]!",
        )}
      >
        +
      </span>
    </div>
  );
}
