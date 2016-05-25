# Product Listing page and Sidebar

For this example, I added a Product Listing page and a Sidebar component.

The Product Listing page was created in the containers folder with the 
filename ProductListing.jsx. This file simply creates three products on a
page and includes the sidebar component.

The Sidebar component is simply an unordered list that is displayed on the
left side of the Product Listing page and serves as navigation to the other
pages in the example.

To get all of this to work, I had to update Navigation.jsx to include a link to the ProductListing
page. I also had to include the ProductListing page in routes.jsx. These two updates enabled
ProductListing as a navigation button that will take you to the respective page.

The Sidebar component was created as a class which was then imported into the ProductListing page.

For both the Sidebar component and the ProductListing page, I created stylesheets to help layout
the page.