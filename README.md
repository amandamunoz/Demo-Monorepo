# Demo-Monorepo
<img src="home.png"
     alt="An image of the homepage"
     style="width:100%; height:500px" />
## How to run this project 

It may make more sense to include these instructions in the `package.json`. The reasoning would be if we added a new package or added new data to the seed file someone wouldn't have to take the time to think about what they need to do post-merge.

1. Clone the project on your computer.
2. Run the following command `cd client && yarn install && cd ../server && rails db:create`
3. The `rails db:create` may need you to configure something within Postgres on your local machine.
4. If you don't run: `rails db:migrate && rails db:seed && cd .. && yarn start:dev `.
