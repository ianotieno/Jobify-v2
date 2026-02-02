import Job from '../models/JobModel.js';
import {StatusCodes} from 'http-status-codes'
import { NotFoundError } from '../errors/customErrors.js';
import mongoose from 'mongoose';
import day from 'dayjs';



export const getAllJobs = async (req, res) => {
  
  const jobs = await Job.find({createdBy:req.user.userId});
  res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);
  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  
  const { id } = req.params;
  const updateJob = await Job.findByIdAndUpdate(id,req.body,
    {new:true});

  res.status(StatusCodes.OK).json({ msg: 'job modified', job :updateJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removeJob =await Job.findByIdAndDelete(id);
  res.status(StatusCodes.OK).json({ msg: 'job deleted',job:removeJob });
};

export const showStats = async (req, res) => {
  const defaultStats = {
    pending: 22,
    interview: 11,
    declined: 4,
  };

  let monthlyApplications = [
    {
      date: 'May 23',
      count: 12,
    },
    {
      date: 'Jun 23',
      count: 9,
    },
    {
      date: 'Jul 23',
      count: 3,
    },
  ];
  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};