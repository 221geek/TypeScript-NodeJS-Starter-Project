import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { UserService } from '../../services/user/UserService';
import Template from '../../global/response';
import { ServerException } from '../../../lib/custom-errors';
import APIError from '../../global/response/apierror';
import Err from '../../global/response/errorcode';

const service = new UserService();
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

class UserController {

  public static listAll = (req: Request, res: Response, next: any) => {
    service.get().then(users => {
      if (users && users.length > 0) {
        res.json(Template.success(users, 'Users Feated succesfully'));
      } else {
        res.json(Template.success(users, 'Users Feated succesfully'));
      }
    }).catch(err => {
      next(new ServerException('error occured'));
    })
  }

  public static addNew = (req: Request, res: Response, next: any) => {
    //
  }

  public static getById = (req: Request, res: Response, next: any) => {
    //
  }
}

export default UserController;