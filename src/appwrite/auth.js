import conf from '../conf/conf'
import { Client, Account, Databases, ID } from 'appwrite'

export class AuthService {
    Client = new Client();
    account;
    databases;
    constructor(){
        this.Client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.Client)
        this.databases = new Databases(this.Client)
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email, password, name);
            if(userAccount){
                const setUser = await this.saveUserToDB({
                    employeeId: userAccount.$id,
                    name: userAccount.name,
                    email: userAccount.email,
                })
                console.log("User set ::",setUser)
                return this.login({email, password})
            }
        } catch (error) {
            console.log("Appwrite Service Create Account Failed :: ",error)
            throw error;
        }
    }

    async saveUserToDB(user) {
        try {
          const newUser = await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteUsersCollectionId,
            ID.unique(),
            user
          );
      
          return newUser;
        } catch (error) {
          console.log(error);
        }
      }

    async login({email, password}){
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.log("Appwrite Service Login Failed ::",error)
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log('Appwrite Service getUser Failed ::',error)
        }
        return null
    }

    async logout(){
        try {
            await this.account.deleteSession();
        } catch (error) {
            console.log('Appwrite Service logout failed :: ',error)
        }
    }
}

const authService = new AuthService();

export default authService