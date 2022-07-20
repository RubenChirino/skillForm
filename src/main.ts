import gsap, { CSSPlugin } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSPlugin, CSSRulePlugin);

interface IChanges {
  changes: gsap.TweenVars;
  timeline: gsap.Position;
}

interface IElement {
  target: gsap.TweenTarget;
  to: IChanges | null;
  from: IChanges | null;
}

const timeline = gsap.timeline({
  defaults: { duration: 2, ease: "power4.inOut" },
});

const flagPoles = CSSRulePlugin.getRule(".card:before");

const elements: IElement[] = [
  {
    target: "h1",
    from: null,
    to: {
      changes: {
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        opacity: 1,
        y: 0,
      },
      timeline: "0",
    },
  },
  {
    target: ".form",
    from: null,
    to: {
      changes: {
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        opacity: 1,
        y: 0,
        duration: 2.2,
      },
      timeline: "-=2",
    },
  },
  {
    target: ".card",
    from: {
      changes: {
        scaleY: 0,
        stagger: 0.2,
      },
      timeline: "-=2",
    },
    to: null,
  },
  {
    target: flagPoles,
    from: {
      changes: {
        stagger: 1,
        opacity: 0,
        transform: "translateY(100px)",
      },
      timeline: "-=2",
    },
    to: null,
  },
  {
    target: ".title, .desc",
    from: null,
    to: {
      changes: {
        stagger: 0.1,
        duration: 1.2,
        opacity: 1,
        y: 0,
      },
      timeline: "-=2",
    },
  },
  {
    target: "footer",
    from: null,
    to: {
      changes: {
        opacity: 1,
      },
      timeline: "-=2",
    },
  },
];

elements.forEach((item) => {
  if (item.from) {
    timeline.from(item.target, item.from.changes, item.from.timeline);
  }
  if (item.to) {
    timeline.to(item.target, item.to.changes, item.to.timeline);
  }
});
