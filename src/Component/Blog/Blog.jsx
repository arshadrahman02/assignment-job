import React from "react";
import { Link, NavLink } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <div>
        <p className="text-center font-bold text-2xl mt-16 my-10 ">Blog Page</p>
      </div>
      <div className="text-center text-green-600">
        <p className="text-center text-red-600 mt-12 my-4 font-semibold">
          Blog NUM 1 : When we Should use Context API
        </p>
        <p>
          the Context API is useful in situations where you need to share data
          or state across multiple components at different levels of the
          component hierarchy.
          <br />
          Here are some situations when you should use the Context API: 1. Theme
          and styling: If you have a theme or a styling system that needs to be
          applied across your entire application, you can use the Context API to
          provide this information to all the components in the tree. <br />
          2. User authentication: If you need to pass user authentication data
          such as a user ID or access token throughout your application, you can
          use the Context API to provide this information to all the components
          that need it. <br />
          3. Localization: If you need to provide translations or localized
          content to different parts of your application, you can use the
          Context API to provide this information to all the components that
          need it. <br />
          4. Managing state: If you have a complex state management system that
          needs to be shared across multiple components, you can use the Context
          API to provide access to this state without having to pass it down
          through each level of the component tree. <br />
        </p>
        <p className="text-center text-red-600 mt-12 my-4 font-semibold">
          Blog NUM 2 : What is Custom Hook in React
        </p>
        <p>
          A custom component is a component that you define yourself using
          React's component API. Custom components are reusable and composable,
          meaning that they can be combined together to create more complex
          interfaces. Custom components are created using the React.Component
          class or the React.FunctionComponent function, which define the
          behavior and rendering of the component. These components can then be
          used just like any other React component in your application. One of
          the key benefits of custom components is that they allow you to
          encapsulate complex behavior and functionality into a single, reusable
          component. This can help to make your code more modular, easier to
          reason about, and less error-prone. In addition to the built-in
          components that come with React (such as div, span, and button),
          custom components are the building blocks of any React application. By
          creating and using custom components, you can create complex user
          interfaces that are easy to maintain and scale over time.
        </p>
        <p className="text-center text-red-600 mt-12 my-4 font-semibold">
          Blog NUM 3 : What is the usage of UseRef{" "}
        </p>
        <p>
          The useRef hook is useful for managing references to DOM elements and
          values that need to persist across re-renders of a component. It can
          be used for a variety of use cases, including managing focus,
          triggering animations, caching values, and communicating between
          components Managing focus: You can use useRef to store a reference to
          a DOM element and then use it to manage focus. For example, you can
          use useRef to store a reference to an input element and then use it to
          focus on that element when the component mounts. 1. Animations: You
          can use useRef to store a reference to an element that you want to
          animate, and then use it to trigger the animation using CSS or a
          JavaScript animation library. 2. Caching values: You can use useRef to
          store a value that you want to persist across re-renders of a
          component. This can be useful for caching expensive calculations or
          values that are used frequently within the component. 3. Communicating
          between components: You can use useRef to create a shared reference
          that can be accessed by multiple components. This can be useful for
          communicating between components that are not directly related, such
          as a parent and child component that are several levels apart in the
          component hierarchy.
        </p>
        <p className="text-center text-red-600 mt-12 my-4 font-semibold">
          Blog NUM 3 : What is the usage of UseMemo
        </p>
        <p>
          useMemo is a hook that allows you to memoize the result of a function
          so that it is only recomputed when its dependencies change. The
          purpose of useMemo is to optimize performance by avoiding unnecessary
          recomputations of expensive computations.useMemo is a powerful tool
          for optimizing the performance of your React applications by avoiding
          unnecessary computations and re-renders. However, it's important to
          use it judiciously, as overusing useMemo can actually have a negative
          impact on performance.
        </p>
      </div>
    </div>
  );
};

export default Blog;
