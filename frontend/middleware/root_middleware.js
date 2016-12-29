import { applyMiddleware } from 'react-redux';
import SessionMiddleware from './session_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware
);
