# Project Decisions

## Libraries and Tools

1. **VueUse**
   - Reason: To avoid recreating functionality that is already available. VueUse is a treeshakable and well-maintained library.
   - Specific benefits:
     - `useFetch` for declarative API calls with built-in loading/error states
     - `useMemoize` for efficient caching of API responses (used for badge images)
     - Composition utilities that follow Vue's reactivity system

3. **TailwindCSS**
   - Reason: For styling purposes, providing utility-first CSS for rapid UI development.
   - Benefits:
     - No need to create and maintain custom CSS files
     - Consistent design language across components
     - Built-in responsive design capabilities
     - Easy theming and maintenance

4. **Pinia**
   - Reason: Modern state management solution designed for Vue 3.
   - Benefits:
     - TypeScript support out of the box
     - Composition API compatible
     - Simpler and more intuitive than Vuex
     - Devtools integration for debugging

5. **Lucide Vue Next**
   - Reason: Lightweight, consistent icon set with Vue 3 support.
   - Benefits:
     - Tree-shakable (only imports used icons)
     - Simple API with customizable size, color, etc.
     - Comprehensive icon collection in a consistent style
     - SVG-based for better scaling and performance

6. **Vitest**
   - Reason: Testing framework designed specifically for Vite projects.
   - Benefits:
     - Fast test execution with HMR support
     - Compatible with Jest's API
     - Seamless TypeScript and ESM support
     - Integrated with Vue's testing ecosystem

## Use of AI

I mainly use AI to generate Unit Testing and Docs which is something AI does quite well. The tool I use is Copilot in agent mode with GTP-4o.

I also used it to give me feedback once the project was finished and to scafold some components.
