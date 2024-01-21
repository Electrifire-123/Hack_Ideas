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

    async createChallenge({title, description, userId, tags}){
        try {
            // const tagsArr = tags.replace(/ /g,'').split(',') || [];

            const newChallenge = await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteChanllengesCollectionId,
                ID.unique(),
                {
                    title: title,
                    description: description,
                    creator: userId,
                    createdDate: new Date().toLocaleDateString(),
                    tags: tags
                }
            )
            if(newChallenge){
                console.log(userId)
                console.log("new challenge",newChallenge)
                return newChallenge
            }
        } catch (error) {
            console.log('Appwrite Service Create post failed :: ',error)
        }
    }

    async updateChallenge(challengeId,{title, description, tags}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteChanllengesCollectionId,
                challengeId,
                {
                    title,
                    description,
                    tags
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
            console.log("DatabaseId :",conf.appwriteDatabaseId)
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
            console.log("ChallengeId",challengeId,"upvotes::",upVotes)
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

const service = new Service()
export default service