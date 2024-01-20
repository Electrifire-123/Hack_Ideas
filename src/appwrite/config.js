import conf from '../conf/conf'
import { Client, ID, Databases, Query} from 'appwrite'

export class Service{
    client = new Client();
    databases;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
    }

    async createChallenge({title, description, challengeId, userId, tags}){
        try {
            const tagsArr = tags.repace(/ /g,'').split(',') || [];

            const newChallenge = await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteChanllengesCollectionId,
                ID.unique(),
                {
                    creator: userId,
                    description: description,
                    title: title,
                    challengeId: challengeId,
                    tags: tagsArr
                }
            )
            if(newChallenge){
                return newChallenge
            }
        } catch (error) {
            console.log('Appwrite Service Create post failed :: ',error)
        }
    }

    async updateChallenge(challengeId,{title, description, tags}){
        try {
            const tagsArr = tags.repace(/ /g,'').split(',') || [];
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteChanllengesCollectionId,
                challengeId,
                {
                    title,
                    description,
                    tags: tagsArr
                }
            )
        } catch (error) {
            console.log('Appwrite Service Update post failed :: ',error)
        }
    }

    async deleteChallenge(challengeId){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteChanllengesCollectionId,
                challengeId
            )
            return true
        } catch (error) {
            console.log('Appwrite Service Delete post failed :: ',error)
        }
    }

    async getChallenge(challengeId){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteChanllengesCollectionId,
                challengeId
            )
        } catch (error) {
            console.log('Appwrite Service Get post failed :: ',error)
        }
    }

    async getAllChallenge(){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteChanllengesCollectionId,
            )
        } catch(error){
            console.log('Appwrite Service List post failed :: ',error)
        }
    }

    async upVoteChallenge(challengeId,upVotes){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteChanllengesCollectionId,
                challengeId,
                {
                    upVotes
                }
            )
        } catch (error) {
            console.log('Appwrite Service UpVote post failed :: ',error)
        }
    }

    async getMyChallenges(userId){
        const queries = [Query.equal('creator', userId), Query.orderDesc('$createdAt')]
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteChanllengesCollectionId,
                queries
            )
        } catch (error) {
            console.log('Appwrite Service Get My post failed :: ',error)
        }
    }
}