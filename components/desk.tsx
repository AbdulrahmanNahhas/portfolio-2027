"use client";

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
    <div className="desk-wrap">
      <div
        className="desk"
        data-arrangement={arrangement}
        aria-label={copy.desk.anIllustratedDeskWithLinksToMy}
      >
        <span className="desk-orbit" aria-hidden="true" />
        <Link href="/blog" className="desk-object desk-note">
          <span className="note-pin" />
          <span className="object-caption">{copy.desk.aNoteToMyself}</span>
          <span className="note-writing">
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
          className="desk-object laptop"
          aria-label={copy.desk.openMyProjects}
        >
          <span className="laptop-screen">
            <span className="screen-bar">
              <i />
              <i />
              <i />
              <span>{copy.desk.helloRs}</span>
            </span>
            <span className="screen-code">
              <span className="code-muted">{copy.desk.aSmallStepForward}</span>
              <br />
              <span className="code-pink">{copy.desk.fn}</span> {copy.desk.main}
              <br />
              &nbsp; <span className="code-yellow">{copy.desk.println}</span>
              {copy.desk.helloWorld}
              <br />
              {copy.desk.decoration}
              <br />
              <br />
              <span className="code-muted">
                {copy.desk.stillLearningStillBuilding}
              </span>
              <span className="code-caret" />
            </span>
            <span className="screen-sticker">
              <CodeIcon weight="bold" />
              {copy.desk.madeForFun}
            </span>
          </span>
          <span className="laptop-base">
            <span />
          </span>
        </Link>
        <Link
          href="/uses"
          className="desk-object disk"
          aria-label={copy.desk.exploreMyToolbox}
        >
          <span className="disk-metal" />
          <span className="disk-label">
            {copy.desk.myToolbox}
            <span>{copy.desk.openSourceMostly}</span>
          </span>
          <span className="disk-notch" />
        </Link>
        <Link href="/about" className="desk-object hello-sticker">
          <span lang="ar" dir="rtl">
            {copy.desk.decoration2}
          </span>
          <span>{copy.desk.helloInternet}</span>
        </Link>
        <span className="desk-object flower" aria-hidden="true">
          <AsteriskIcon weight="bold" />
          <span>
            <i />
            <i />
            <b />
          </span>
        </span>
        <span className="desk-object small-sticker" aria-hidden="true">
          <HeartIcon weight="fill" />
          {copy.desk.stillLearning}
        </span>
      </div>
      <div className="desk-controls">
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
