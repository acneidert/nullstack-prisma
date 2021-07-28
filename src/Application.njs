import Nullstack from 'nullstack';
import './Application.scss';
import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient()

class Application extends Nullstack {

  users = []

  prepare({ page }) {
    page.locale = 'pt-BR';
  }

  static async start(context){
    await this.startDatabase(context);
  }

  static async startDatabase(context) {
    context.database = new PrismaClient()
  }

  static async getUsers({database}) {
    const allUsers = await database.post.findMany()
    console.log(allUsers)
    return allUsers;
  }

  async hydrate() {
    this.users = await this.getUsers();
  }

  renderHead() {
    return (
      <head>
      
      </head> 
    )
  }

  render() {
    return (
      <main>
        <Head />
        {this.users}
      </main>
    )
  }

}

export default Application;