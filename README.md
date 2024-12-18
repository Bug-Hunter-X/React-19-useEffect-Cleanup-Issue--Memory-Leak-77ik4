# React 19 useEffect Cleanup Issue
This repository demonstrates a potential memory leak in React 19 related to the `useEffect` hook and its cleanup function. The issue occurs when the `clearInterval` function within the cleanup is not executed correctly.  This can happen if the component unmounts before the cleanup function is triggered, or if there's a problem with the way the interval ID is handled.

## Bug Description
The provided `MyComponent` uses `setInterval` within a `useEffect` hook to update a counter.  The cleanup function is designed to `clearInterval` to prevent memory leaks, but under certain circumstances, this might not work correctly leading to a potential memory leak.

## Solution
The solution ensures the `clearInterval` function is reliably called by checking if the `intervalId` exists before attempting to clear it in the cleanup function.