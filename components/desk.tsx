"use client";

import { cn } from "@/lib/utils";
import { copy, message } from "@/lib/content";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRightIcon,
  ArrowsClockwiseIcon,
  AsteriskIcon,
  CodeIcon,
  HeartIcon,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
export function Desk() {
  const [arrangement, setArrangement] = useState(0);
  return (
    <div
      className={cn(
        "desk-wrap",
        "min-w-0",
        "max-[900px]:mx-auto max-[900px]:w-135 max-[900px]:max-w-full max-[600px]:mt-1.5",
      )}
    >
      <div
        className={cn(
          "desk",
          "h-112.5 relative isolate",
          "min-[600px]:h-115 max-[370px]:transform-[scale(0.52)] max-[370px]:mb-[-216px] max-[370px]:left-[calc(50%_-_133px)] min-[370px]:max-[600px]:transform-[scale(0.67)] min-[370px]:max-[600px]:mb-[-150px] min-[370px]:max-[600px]:left-[calc(50%_-_171px)] min-[600px]:max-[900px]:transform-none min-[600px]:max-[900px]:w-full min-[900px]:max-[1150px]:transform-[scale(0.85)] min-[900px]:max-[1150px]:w-127.5 min-[900px]:max-[1150px]:ml-[-25px] min-[1500px]:transform-[scale(1.05)] max-[600px]:origin-[top_left] max-[600px]:w-127.5 min-[600px]:max-[1150px]:origin-center max-[900px]:ml-0",
          "[&[data-arrangement='1']_.desk-note]:transform-[translate(14px,_13px)_rotate(5deg)]",
          "[&[data-arrangement='1']_.disk]:transform-[translate(-4px,_-13px)_rotate(-9deg)]",
          "[&[data-arrangement='1']_.laptop]:transform-[translate(-6px,_8px)_rotate(3deg)]",
          "[&[data-arrangement='1']_.hello-sticker]:transform-[translate(-18px,_-5px)_rotate(-8deg)]",
          "[&[data-arrangement='1']_.flower]:transform-[translate(-4px,_-4px)_rotate(85deg)]",
          "[&[data-arrangement='2']_.desk-note]:transform-[translate(-9px,_27px)_rotate(-16deg)]",
          "[&[data-arrangement='2']_.disk]:transform-[translate(-17px,_10px)_rotate(22deg)]",
          "[&[data-arrangement='2']_.laptop]:transform-[translate(0,_-10px)_rotate(-2deg)]",
          "[&[data-arrangement='2']_.hello-sticker]:transform-[translate(-2px,_-12px)_rotate(20deg)]",
          "[&[data-arrangement='2']_.flower]:transform-[translate(8px,_5px)_rotate(150deg)]",
        )}
        data-arrangement={arrangement}
        aria-label={copy.desk.anIllustratedDeskWithLinksToMy}
      >
        <span
          className={cn(
            "desk-orbit",
            "rounded-[50%] border border-dashed border-border absolute top-10 right-0 bottom-[15px] left-0 transform-[rotate(-23deg)]",
          )}
          aria-hidden="true"
        />
        <Link
          href="/blog"
          className={cn(
            "desk-object desk-note",
            "absolute [transition:transform_0.6s_cubic-bezier(0.22,_1,_0.36,_1),_filter_0.25s,_translate_0.3s,_rotate_0.3s,_scale_0.3s] px-5 bg-butter text-object-ink top-[5px] left-10.5 w-44 h-[179px] pt-[29px] pb-4 transform-[rotate(-9deg)] shadow-[2px_7px_0_#2336590c] z-3",
            "motion-reduce:[translate:none]! motion-reduce:[rotate:none]! motion-reduce:[scale:none]!",
            "[&:is(a):hover]:[filter:drop-shadow(0_10px_10px_#172b4d20)]",
            "[&:is(a):focus-visible]:[outline-offset:10px]",
            "[&>svg]:absolute [&>svg]:bottom-3.5 [&>svg]:right-[13px] [&>svg]:w-[19px]",
            "fine-hover:hover:[translate:0_-4px] fine-hover:hover:rotate-[2deg] fine-hover:hover:scale-[1.035]",
            "fine-hover:focus-visible:[translate:0_-4px] fine-hover:focus-visible:rotate-[2deg] fine-hover:focus-visible:scale-[1.035]",
            "fine-hover:[&.flower:hover]:rotate-[-14deg] fine-hover:[&.flower:hover]:scale-[1.08]",
            "fine-hover:[&.small-sticker:hover]:rotate-[-3deg]",
          )}
        >
          <span
            className={cn(
              "note-pin",
              "absolute top-[-9px] left-13.5 w-17.5 h-[25px] bg-[#ffffff70] transform-[rotate(3deg)]",
            )}
          />
          <span
            className={cn(
              "object-caption",
              "text-[8px] uppercase tracking-[0.12em]",
            )}
          >
            {copy.desk.aNoteToMyself}
          </span>
          <span
            className={cn(
              "note-writing",
              "block font-heading text-[22px] font-[650] leading-[1.25] mt-2.5 tracking-[-0.5px]",
            )}
          >
            {copy.desk.stayCurious}
            <br />
            {copy.desk.makeThings}
            <br />
            {copy.desk.repeat}
          </span>
          <ArrowUpRightIcon aria-hidden="true" />
        </Link>
        <Link
          href="/projects"
          className={cn(
            "desk-object laptop",
            "absolute [transition:transform_0.6s_cubic-bezier(0.22,_1,_0.36,_1),_filter_0.25s,_translate_0.3s,_rotate_0.3s,_scale_0.3s] top-40 left-19.5 w-[345px] transform-[rotate(-6deg)] z-5 text-[#d8e5fa]",
            "motion-reduce:[translate:none]! motion-reduce:[rotate:none]! motion-reduce:[scale:none]!",
            "[&:is(a):hover]:[filter:drop-shadow(0_10px_10px_#172b4d20)]",
            "[&:is(a):focus-visible]:[outline-offset:10px]",
            "fine-hover:hover:[translate:0_-4px] fine-hover:hover:rotate-[2deg] fine-hover:hover:scale-[1.035]",
            "fine-hover:focus-visible:[translate:0_-4px] fine-hover:focus-visible:rotate-[2deg] fine-hover:focus-visible:scale-[1.035]",
            "fine-hover:[&.flower:hover]:rotate-[-14deg] fine-hover:[&.flower:hover]:scale-[1.08]",
            "fine-hover:[&.small-sticker:hover]:rotate-[-3deg]",
          )}
          aria-label={copy.desk.openMyProjects}
        >
          <span
            className={cn(
              "laptop-screen",
              "rounded-tl-[14px] rounded-tr-[14px] rounded-br-[3px] rounded-bl-[3px] border-t-[9px] border-r-[9px] border-b-[14px] border-l-[9px] border-solid border-[#7c91bb] block bg-[#233659] h-56.5 shadow-[0_10px_25px_#23365915] relative",
            )}
          >
            <span
              className={cn(
                "screen-bar",
                "p-[9px] gap-1 border-b [border-bottom-style:solid] border-b-[#ffffff18] flex items-center",
                "[&_i]:rounded-[50%] [&_i]:size-[5px] [&_i]:bg-[#efbed1]",
                "[&_i:nth-child(2)]:bg-[#f6da7a]",
                "[&_i:nth-child(3)]:bg-[#bad9c9]",
                "[&>span]:[font-family:monospace] [&>span]:text-[8px] [&>span]:ml-5 [&>span]:opacity-65",
              )}
            >
              <i />
              <i />
              <i />
              <span>{copy.desk.helloRs}</span>
            </span>
            <span
              className={cn(
                "screen-code",
                "px-5 py-4.5 block [font-family:monospace] text-[11px] leading-[1.7]",
              )}
            >
              <span className={cn("code-muted", "text-[#aabbd5]")}>
                {copy.desk.aSmallStepForward}
              </span>
              <br />
              <span className={cn("code-pink", "text-[#efbed1]")}>
                {copy.desk.fn}
              </span>{" "}
              {copy.desk.main}
              <br />
              &nbsp;{" "}
              <span className={cn("code-yellow", "text-[#f6da7a]")}>
                {copy.desk.println}
              </span>
              {copy.desk.helloWorld}
              <br />
              {copy.desk.decoration}
              <br />
              <br />
              <span className={cn("code-muted", "text-[#aabbd5]")}>
                {copy.desk.stillLearningStillBuilding}
              </span>
              <span
                className={cn(
                  "code-caret",
                  "inline-block h-3 w-1.5 bg-[#bad9c9] ml-1.5 [vertical-align:middle]",
                )}
              />
            </span>
            <span
              className={cn(
                "screen-sticker",
                "px-[9px] py-1.5 gap-[5px] rounded-[4px] border-[2px] border-solid border-[white] absolute right-[7px] bottom-[9px] flex items-center transform-[rotate(8deg)] bg-[#bad9c9] text-[#233659] text-[9px]",
                "[&_svg]:size-[15px]",
              )}
            >
              <CodeIcon weight="bold" />
              {copy.desk.madeForFun}
            </span>
          </span>
          <span
            className={cn(
              "laptop-base",
              "border-b-[5px] [border-bottom-style:solid] border-b-[#7c91bb] block ml-[-17px] w-[calc(100%+34px)] h-4.5 bg-[#a7b8d8] [border-radius:1px_1px_50%_50%_/_1px_1px_100%_100%]",
              "[&>span]:m-auto [&>span]:rounded-tl-[0] [&>span]:rounded-tr-[0] [&>span]:rounded-br-[7px] [&>span]:rounded-bl-[7px] [&>span]:block [&>span]:w-[75px] [&>span]:h-1.5 [&>span]:bg-[#8197bf]",
            )}
          >
            <span />
          </span>
        </Link>
        <Link
          href="/uses"
          className={cn(
            "desk-object disk",
            "absolute [transition:transform_0.6s_cubic-bezier(0.22,_1,_0.36,_1),_filter_0.25s,_translate_0.3s,_rotate_0.3s,_scale_0.3s] rounded-tl-[6px] rounded-tr-[6px] rounded-br-[6px] rounded-bl-[18px] border-[2px] border-solid border-object-ink right-4 top-13 w-[143px] h-[155px] bg-rose transform-[rotate(12deg)] text-object-ink z-4 shadow-[4px_5px_0_#2336590c]",
            "motion-reduce:[translate:none]! motion-reduce:[rotate:none]! motion-reduce:[scale:none]!",
            "[&:is(a):hover]:[filter:drop-shadow(0_10px_10px_#172b4d20)]",
            "[&:is(a):focus-visible]:[outline-offset:10px]",
            "fine-hover:hover:[translate:0_-4px] fine-hover:hover:rotate-[2deg] fine-hover:hover:scale-[1.035]",
            "fine-hover:focus-visible:[translate:0_-4px] fine-hover:focus-visible:rotate-[2deg] fine-hover:focus-visible:scale-[1.035]",
            "fine-hover:[&.flower:hover]:rotate-[-14deg] fine-hover:[&.flower:hover]:scale-[1.08]",
            "fine-hover:[&.small-sticker:hover]:rotate-[-3deg]",
          )}
          aria-label={copy.desk.exploreMyToolbox}
        >
          <span
            className={cn(
              "disk-metal",
              "mx-auto rounded-tl-[0] rounded-tr-[0] rounded-br-[4px] rounded-bl-[4px] border border-solid border-object-ink block mt-[-1px] mb-0 w-[75px] h-12 bg-[#ecedf2]",
              "after:content-[''] after:block after:w-3.5 after:h-[33px] after:bg-[#697d9a] after:mt-1.5 after:mr-0 after:mb-0 after:ml-11.5",
            )}
          />
          <span
            className={cn(
              "disk-label",
              "px-2.5 py-3 mx-3 border border-solid border-object-ink block bg-[#fff9ef] mt-5 mb-0 [font-family:monospace] text-[11px] font-bold",
              "[&>span]:block [&>span]:text-[7px] [&>span]:mt-[7px] [&>span]:font-normal",
            )}
          >
            {copy.desk.myToolbox}
            <span>{copy.desk.openSourceMostly}</span>
          </span>
          <span
            className={cn(
              "disk-notch",
              "border border-solid border-object-ink absolute size-[9px] left-2.5 bottom-2",
            )}
          />
        </Link>
        <Link
          href="/about"
          className={cn(
            "desk-object hello-sticker",
            "absolute [transition:transform_0.6s_cubic-bezier(0.22,_1,_0.36,_1),_filter_0.25s,_translate_0.3s,_rotate_0.3s,_scale_0.3s] rounded-[50%] border-[4px] border-solid border-[white] right-[-1px] bottom-6.5 bg-mint text-object-ink w-32.5 h-26 flex flex-col items-center justify-center transform-[rotate(12deg)] z-7 shadow-[0_3px_4px_#23365915]",
            "motion-reduce:[translate:none]! motion-reduce:[rotate:none]! motion-reduce:[scale:none]!",
            "[&:is(a):hover]:[filter:drop-shadow(0_10px_10px_#172b4d20)]",
            "[&:is(a):focus-visible]:[outline-offset:10px]",
            "[&>span:first-child]:text-[37px] [&>span:first-child]:leading-[1.3] [&>span:first-child]:font-bold",
            "[&>span:last-child]:[font-family:monospace] [&>span:last-child]:text-[8px]",
            "fine-hover:hover:[translate:0_-4px] fine-hover:hover:rotate-[2deg] fine-hover:hover:scale-[1.035]",
            "fine-hover:focus-visible:[translate:0_-4px] fine-hover:focus-visible:rotate-[2deg] fine-hover:focus-visible:scale-[1.035]",
            "fine-hover:[&.flower:hover]:rotate-[-14deg] fine-hover:[&.flower:hover]:scale-[1.08]",
            "fine-hover:[&.small-sticker:hover]:rotate-[-3deg]",
          )}
        >
          <span lang="ar" dir="rtl">
            {copy.desk.decoration2}
          </span>
          <span>{copy.desk.helloInternet}</span>
        </Link>
        <span
          className={cn(
            "desk-object flower",
            "absolute [transition:transform_0.6s_cubic-bezier(0.22,_1,_0.36,_1),_filter_0.25s,_translate_0.3s,_rotate_0.3s,_scale_0.3s] top-px right-41.5 w-[85px] h-25 transform-[rotate(14deg)] z-4",
            "motion-reduce:[translate:none]! motion-reduce:[rotate:none]! motion-reduce:[scale:none]!",
            "[&:is(a):hover]:[filter:drop-shadow(0_10px_10px_#172b4d20)]",
            "[&:is(a):focus-visible]:[outline-offset:10px]",
            "[&>svg]:size-[85px] [&>svg]:text-primary",
            "[&>span]:gap-[5px] [&>span]:rounded-[50%] [&>span]:absolute [&>span]:size-7.5 [&>span]:bg-butter [&>span]:top-[27px] [&>span]:left-[27px] [&>span]:flex [&>span]:items-center [&>span]:justify-center",
            "[&_i]:rounded-[50%] [&_i]:w-[3px] [&_i]:h-1 [&_i]:bg-object-ink",
            "[&_b]:rounded-[50%] [&_b]:border-b [&_b]:[border-bottom-style:solid] [&_b]:border-b-object-ink [&_b]:w-[9px] [&_b]:h-[5px] [&_b]:absolute [&_b]:left-[11px] [&_b]:top-[17px]",
            "fine-hover:hover:[translate:0_-4px] fine-hover:hover:rotate-[2deg] fine-hover:hover:scale-[1.035]",
            "fine-hover:focus-visible:[translate:0_-4px] fine-hover:focus-visible:rotate-[2deg] fine-hover:focus-visible:scale-[1.035]",
            "fine-hover:[&.flower:hover]:rotate-[-14deg] fine-hover:[&.flower:hover]:scale-[1.08]",
            "fine-hover:[&.small-sticker:hover]:rotate-[-3deg]",
          )}
          aria-hidden="true"
        >
          <AsteriskIcon weight="bold" />
          <span>
            <i />
            <i />
            <b />
          </span>
        </span>
        <span
          className={cn(
            "desk-object small-sticker",
            "absolute [transition:transform_0.6s_cubic-bezier(0.22,_1,_0.36,_1),_filter_0.25s,_translate_0.3s,_rotate_0.3s,_scale_0.3s] px-3 py-2 gap-[5px] rounded-[22px] border-[3px] border-solid border-[white] left-[15px] bottom-7 bg-primary text-primary-foreground transform-[rotate(-13deg)] flex items-center z-6 text-[10px]",
            "motion-reduce:[translate:none]! motion-reduce:[rotate:none]! motion-reduce:[scale:none]!",
            "[&:is(a):hover]:[filter:drop-shadow(0_10px_10px_#172b4d20)]",
            "[&:is(a):focus-visible]:[outline-offset:10px]",
            "[&>svg]:w-3.5",
            "fine-hover:hover:[translate:0_-4px] fine-hover:hover:rotate-[2deg] fine-hover:hover:scale-[1.035]",
            "fine-hover:focus-visible:[translate:0_-4px] fine-hover:focus-visible:rotate-[2deg] fine-hover:focus-visible:scale-[1.035]",
            "fine-hover:[&.flower:hover]:rotate-[-14deg] fine-hover:[&.flower:hover]:scale-[1.08]",
            "fine-hover:[&.small-sticker:hover]:rotate-[-3deg]",
          )}
          aria-hidden="true"
        >
          <HeartIcon weight="fill" />
          {copy.desk.stillLearning}
        </span>
      </div>
      <div
        className={cn(
          "desk-controls",
          "px-0 flex items-center justify-between text-[9px] text-muted-foreground mt-[5px]",
          "min-[600px]:text-[10px] min-[1150px]:pl-7.5 min-[1150px]:mt-3 min-[900px]:mt-[-25px] max-[600px]:gap-[3px] max-[370px]:flex-wrap",
          "[&_[data-slot='button']]:text-[10px]",
          "min-[600px]:[&_[data-slot='button']]:text-[11px]",
        )}
      >
        <span>{copy.desk.goOnExploreTheDesk}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setArrangement((value) => (value + 1) % 3)}
        >
          <ArrowsClockwiseIcon data-icon="inline-start" />
          {copy.desk.shuffleThings}
        </Button>
      </div>
      <span className="sr-only" role="status">
        {message(copy.desk.arrangementStatus, {
          number: arrangement + 1,
          total: 3,
        })}
      </span>
    </div>
  );
}
