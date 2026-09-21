import userRepository from "../repositories/user.repository.ts";

const userfindByEmail = async(email:string)=>{
try {
    return await userRepository.findOneByEmail(email);
} catch (error) {
    
}
}