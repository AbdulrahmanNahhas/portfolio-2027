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
    <div className="illustrated-browser">
      <div className="illustrated-browser-bar">
        <span>
          <i />
          <i />
          <i />
        </span>
        <small>{artwork[kind].window}</small>
        <span className="browser-bar-menu">···</span>
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
      <div className="illustrated-dashboard">
        <div className="illustrated-sidebar">
          {documentation ? <FolderIcon /> : <CodeIcon />}
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="illustrated-dashboard-main">
          <strong>{text.heading}</strong>
          <div className="illustrated-stat-row">
            {text.labels.map((label, i) => (
              <div key={label}>
                <span>{label}</span>
                <b>{["✳", "↗", "···"][i]}</b>
              </div>
            ))}
          </div>
          {documentation ? (
            <div className="illustrated-records">
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
            <svg className="illustrated-graph" viewBox="0 0 260 60" fill="none">
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
      <div className="illustrated-site-nav">
        <b>{text.window}</b>
        <span />
        <span />
        <i />
      </div>
      <div className="illustrated-site-hero">
        <div>
          <strong>{text.heading}</strong>
          <span className="illustrated-text-line" />
          <span className="illustrated-text-line short" />
          <span className="illustrated-button">
            {text.labels[0]}
            <span>↗</span>
          </span>
        </div>
        <div className="illustrated-site-symbol">
          <Icon weight="light" />
          <i />
          <i />
        </div>
      </div>
      <div className="illustrated-site-cards">
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
      <div className="illustrated-media">
        <div className="illustrated-media-sidebar">
          <PlayIcon weight="fill" />
          <i />
          <i />
          <i />
        </div>
        <div>
          <strong>{text.heading}</strong>
          <div className="illustrated-player">
            <div className="illustrated-poster-shape" />
            <PlayIcon weight="fill" />
            <span />
            <span />
          </div>
          <div className="illustrated-media-tiles">
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
    <div className="illustrated-community">
      <HeartIcon weight="fill" />
      <strong>{artwork.promise.heading}</strong>
      <div className="illustrated-people">
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
      <div className="illustrated-terminal">
        <div className="terminal-gutter">
          1<br />2<br />3<br />4<br />5<br />6
        </div>
        <div className="terminal-lines">
          {artwork[kind].code.map((line, i) => (
            <span
              key={i}
              className={i === 3 ? "terminal-highlight" : undefined}
            >
              {line}
            </span>
          ))}
        </div>
      </div>
      <div className="illustrated-terminal-footer">
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
      className={`project-art project-illustration illustration-${key}`}
      aria-hidden="true"
    >
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />
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
        <div className="illustrated-object">
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
        <div className="hardware-module">
          <div className="hardware-pins" />
          <CpuIcon weight="light" />
          <small>{key === "supermarket" ? "RPi" : "ESP32"}</small>
          <div className="hardware-led" />
        </div>
      )}
      {key === "thabat" && (
        <div className="art-book-note">
          <PlantIcon />
          <strong lang="ar" dir="rtl">
            {text.heading}
          </strong>
          <small>{text.labels.join(" · ")}</small>
        </div>
      )}
      <span className="art-sticker">
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
      <span className="art-caption">
        {hardware ? text.heading : text.caption}
      </span>
      <span className="art-spark spark-one">✳</span>
      <span className="art-spark spark-two">+</span>
    </div>
  );
}
