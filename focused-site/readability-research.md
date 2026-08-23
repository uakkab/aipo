# Focused Mode Readability Research Brief

Date: 2026-08-22

## Purpose
This brief consolidates research-backed guidance for improving webpage readability in the Focused mode, including what consistently works, what tends to fail, and concrete standards to implement.

## Key Findings (Evidence Summary)

1. People mostly scan, not read linearly.
- Across decades of usability studies, scanning is the dominant behavior on web pages.
- Reading tends to happen when information architecture is clear, the layout is structured, and writing quality is high.

2. Writing style and formatting have measurable usability impact.
- In a controlled comparison of equivalent content, concise writing, scannable formatting, and objective language improved usability substantially.
- Combined concise + scannable + objective versions outperformed promotional control content by a very large margin.

3. Attention is heavily front-loaded.
- Users pay disproportionately more attention to content at the top of pages and top of sections.
- First words in headings and links carry outsized weight for comprehension during scanning.

4. F-pattern and related scanning patterns remain relevant.
- F-pattern scanning appears on desktop and mobile when pages are text-heavy and weakly structured.
- Better visual hierarchy and chunking can reduce harmful skipping behavior.

5. Readability constraints on line length and spacing are strongly supported.
- Very long lines increase effort and drop willingness to read.
- Practical and standards guidance converges on keeping line length constrained and spacing generous.

6. Contrast is a core readability variable, not only an accessibility checkbox.
- Adequate luminance contrast is necessary for users with low vision, aging-related contrast sensitivity loss, and many real-world viewing conditions.

## What Works

- Front-load key information in headlines, subheads, and first paragraphs.
- Keep body copy concise and objective; remove promotional filler.
- Use clear heading hierarchy and section chunking.
- Use bullets and numbered steps for scan efficiency.
- Constrain body text measure (line length).
- Keep body text left-aligned (avoid full justification for long-form reading).
- Maintain high text contrast and strong interactive focus indicators.
- Preserve consistent navigation and predictable layout patterns.

## What Does Not Work

- Wall-of-text sections with weak hierarchy.
- Long lines (especially 90+ characters) for body copy.
- Vague headings and link labels that defer meaning to later words.
- Full-justified paragraphs for dense reading content.
- Low-contrast text and visually weak UI states.
- Inline interruptions that break reading flow at critical points.

## Recommended Focused Mode Standards

## 1) Typography and Measure
- Body width target: 60-75 characters per line.
- Hard cap: 80 characters per line (40 for CJK where applicable).
- CSS starting point: max-width: 68ch to 72ch for long-form text containers.
- Body font size: 16-19px depending on viewport and typeface.
- Line height: 1.5 to 1.75.
- Paragraph spacing: at least 1x line height between paragraphs.
- Alignment: left-aligned for body copy.

## 2) Content Structure
- Inverted pyramid: conclusion first, details later.
- First two paragraphs contain the highest-value content.
- One idea per paragraph where possible.
- Use descriptive subheadings every 2-4 paragraphs in long sections.
- Start headings and links with information-carrying words.

## 3) Contrast and Accessibility Baselines
- Body text contrast: at least 4.5:1 (WCAG AA).
- Large text contrast: at least 3:1.
- Prefer 7:1 where practical for critical reading surfaces.
- Ensure resize/reflow works at 200% without horizontal reading scroll.
- Ensure spacing overrides do not break layout (text spacing robustness).

## 4) Interaction and Navigation for Reading Flow
- Keep repeated navigation consistent across pages.
- Use clear focus-visible styling for keyboard users.
- Avoid automatic context changes on focus/input.
- Avoid disruptive inserts in the reading column.

## 5) Writing Quality Rules for Focused Mode
- Prefer plain language and concrete nouns/verbs.
- Replace marketing language with factual wording.
- Keep sentences and paragraphs shorter than print defaults.
- Convert dense prose into bullets when scanning is likely.

## Suggested Implementation Checklist

- Define shared CSS tokens for measure, spacing, and contrast.
- Apply max-width in ch units to all long-form reading containers.
- Standardize heading and paragraph rhythm across templates.
- Audit button/link contrast in all states (default, hover, disabled, focus).
- Refactor vague headings/links to front-loaded descriptive phrasing.
- Run a WCAG-focused pass for contrast, reflow, and text spacing resilience.

## References

1. Nielsen, J. (1997). How Users Read on the Web. Nielsen Norman Group.
   https://www.nngroup.com/articles/how-users-read-on-the-web/

2. Nielsen, J. (2008). How Little Do Users Read? Nielsen Norman Group.
   https://www.nngroup.com/articles/how-little-do-users-read/

3. Pernice, K. (2017, last reviewed 2026). F-Shaped Pattern of Reading on the Web: Misunderstood, But Still Relevant (Even on Mobile). Nielsen Norman Group.
   https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/

4. Moran, K. (2020). How People Read Online: New and Old Findings. Nielsen Norman Group.
   https://www.nngroup.com/articles/how-people-read-online/

5. Nielsen, J. (2013). Website Reading: It (Sometimes) Does Happen. Nielsen Norman Group.
   https://www.nngroup.com/articles/website-reading/

6. Nielsen, J. (2009). First 2 Words: A Signal for the Scanning Eye. Nielsen Norman Group.
   https://www.nngroup.com/articles/first-2-words-a-signal-for-scanning/

7. Nielsen, J. (1996, updates 2003/2015). Inverted Pyramids in Cyberspace. Nielsen Norman Group.
   https://www.nngroup.com/articles/inverted-pyramids-in-cyberspace/

8. W3C WAI. WCAG 2.2 Quick Reference.
   https://www.w3.org/WAI/WCAG22/quickref/

9. W3C WAI. Understanding Success Criterion 1.4.3 Contrast (Minimum).
   https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html

10. W3C WAI. Understanding Success Criterion 1.4.8 Visual Presentation.
    https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation.html

11. Scott, E. (2022). Readability: The Optimal Line Length. Baymard Institute.
    https://baymard.com/blog/line-length-readability

12. Knoblauch, K., Arditi, A., and Szlyk, J. (1991). Effects of chromatic and luminance contrast on reading. Journal of the Optical Society of America A, 8(2), 428-439.
    https://doi.org/10.1364/JOSAA.8.000428

13. Weinreich, H., Obendorf, H., Herder, E., and Mayer, M. (2008). Not Quite the Average: An Empirical Study of Web Use. ACM Transactions on the Web, 2(1).
    https://doi.org/10.1145/1326561.1326566

## Notes on Source Coverage
- Some paywalled academic portals limited full-text extraction in-tool; references are included via canonical DOI and publisher pages.
- Recommendations above rely on extractable abstracts, standards text, and well-documented UX synthesis from NN/g, W3C, and Baymard.