# General Test Rules

- No hard coded data, or selector

  - use "selectors" file to create selector, and use that everywhere
  - and use a data file to store all the data you need for your texts
  - do not hard code data, and please "DO NOT REPEAT THE CODE"
    - if some thing is needed at two places, than create a constant and use that in both places so it will be easy to change that later,
      - this applies to but not limited to, messages, selectors, functions, or any other data which we need at two places.

- Please follow a naming convention, do not miss naming conventions randomly.
  - if you have followed, "title case" for keys of a object then go with that in whole project
  - for naming conventions please use this
    - objects in "constants" folder, their names should be "upper case"
      - keys in these objects should use "title + camel case"
    - for functions use "camel case"
    - please ask me if there is something which is not defined yet and you need help with
- no relative imports, we have setup the "@trz\*" special absolute imports so please use these and do not use relative imports anywhere in project.
