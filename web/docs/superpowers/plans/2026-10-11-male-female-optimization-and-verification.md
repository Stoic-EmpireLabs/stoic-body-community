# Male & Female Physiological Optimization & Verification Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Calibrate the Stoic Body workout calculation engine with gender-specific biomechanics and physiological periodization for both Male and Female athletes, populate explicit planned sets/reps/weights across all routines, guarantee image fitting in all contexts, and verify end-to-end with Playwright before production deployment.

**Architecture:** Extend `planGenerator.ts` to compute specific set/rep schemes (`routine.plannedSets` and `routine.setsCount`) calibrated to athlete sex, experience, and training kind. Ensure female routines prioritize glute/hamstring time-under-tension and upper posture, while male routines focus on compound progressive overload and tactical upper armor. Verify image rendering in `ExerciseArt.tsx` and `ScheduleScreen.tsx` for zero-distortion display, and write Playwright tests to prove both flows work seamlessly.

**Tech Stack:** React 19, TypeScript, Tailwind CSS, Lucide Icons, Vite, Playwright, Vercel CLI.

**Spec:** User directives requiring deep calculation logic for both male and female onboarding, visual picture schedule, flawless image fitting, Apple SF Pro typography, and zero background tasks upon completion.

## Global Constraints
- Apple San Francisco Pro typography across all views.
- No lagging cursor followers; 120Hz native cursor tracking by default.
- Every routine generated must include `plannedSets` and `setsCount` populated with valid sets.
- Strict asset rendering: Female mode shows 3D female anatomical illustrations; Male mode shows vector wireframe animations.
- All background tasks must be terminated before reporting completion.

## Review Focus
1. Onboarding completion must write `plannedSets` to generated routines in store.
2. Female Empress mode must apply Aurelia coach personality and Rose Gold theme.
3. Male Spartan mode must apply USMC / Marine personality and Spartan Amber theme.
4. Picture Schedule in `ScheduleScreen.tsx` must render exercise thumbnails without image distortion.
5. All Playwright tests must pass with zero failures.

---

### Task 1: Calibrate Physiological Engine with Planned Sets & Reps
**Files:**
- Modify: `projects/stoic-body-community/web/src/utils/planGenerator.ts`
- Modify: `projects/stoic-body-community/web/src/types/index.ts`
- Test: `projects/stoic-body-community/web/tests/onboarding.spec.ts`

**Interfaces:**
- Consumes: `OnboardingAnswers`, `Exercise[]`
- Produces: `GeneratedPlan` where each `Routine` contains populated `plannedSets: Record<string, { reps: number; weight: number; kind: SetKind }[]>` and `setsCount: Record<string, number>`.

- [ ] **Step 1: Write test verifying plannedSets and setsCount exist on generated routines**
- [ ] **Step 2: Run test to verify failure/gap**
- [ ] **Step 3: Implement planned sets generator in `src/utils/planGenerator.ts`**
  - Strength: 4-5 sets, 4-6 reps, compound intensity.
  - Hypertrophy: 3-4 sets, 8-12 reps, targeted volume.
  - Toning: 3-4 sets, 12-15 reps, high TUT.
  - Combat: 4 sets, 15-20 reps, tactical pacing.
  - Abs/Core: 3 sets, 15-25 reps / 45s holds.
- [ ] **Step 4: Verify test passes**
- [ ] **Step 5: Commit changes**

---

### Task 2: Image Fit & Visual Framing Perfection
**Files:**
- Modify: `projects/stoic-body-community/web/src/components/ExerciseArt.tsx`
- Modify: `projects/stoic-body-community/web/src/screens/ScheduleScreen.tsx`
- Modify: `projects/stoic-body-community/web/src/screens/ExerciseDetailModal.tsx`
- Test: `projects/stoic-body-community/web/tests/schedule.spec.ts`

- [ ] **Step 1: Verify aspect-ratio and object-contain in ExerciseArt and ScheduleScreen**
- [ ] **Step 2: Add visual test in Playwright to screenshot male and female exercise cards**
- [ ] **Step 3: Run Playwright test to verify clean image fit**
- [ ] **Step 4: Commit changes**

---

### Task 3: Sync to Personal App and Deploy to Vercel
**Files:**
- Sync: `projects/stoic-body-community/web` -> `projects/stoic-body/web`
- Deploy: `stoic-body.vercel.app` & `web-blond-ten-ekwjkkp67y.vercel.app`

- [ ] **Step 1: Synchronize all modified files**
- [ ] **Step 2: Run `tsc -b && vite build` on both projects**
- [ ] **Step 3: Deploy both to Vercel production**
- [ ] **Step 4: Terminate all running tasks**
