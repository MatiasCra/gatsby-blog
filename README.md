<p align="center">

<a  href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">

<img  alt="Gatsby"  src="https://www.gatsbyjs.com/Gatsby-Monogram.svg"  width="60"  />

</a>

</p>

# Gatsby Blog

### Hosting

This site is being hosted at https://zen-kirch-8328d6.netlify.app/

 ### What's this?

  This is a simple blog website made to learn and practice the gatsby framework using the Contentful CMS.

### How to run?

To run in development you will need to setup the enviroment variables. To do so create a file called ".env" in the proyect root directory containing the following:

```shell

GATSBY_GRAPHQL_IDE=playground
CONTENTFUL_SPACE_ID=YOUR CONTENTFUL SPACE ID
CONTENTFUL_ACCESS_TOKEN=YOUR CONTENTFUL ACCESS TOKEN

```
Then run
``` shell 
npm run develop
```

### Contentful
The contentful model is:

**BlogPost**
| Field name | Field type |
| ----------- | ----------- |
| Title | Short text | 
| Slug | Short text |
| Image | Media |
| Published Date | Date & time |
| Body | Rich text |
| Author | Reference |

**Author**
| Field name | Field type |
| ----------- | ----------- |
| Name | Short text |
| Photo | Media |
| About | Long text |
