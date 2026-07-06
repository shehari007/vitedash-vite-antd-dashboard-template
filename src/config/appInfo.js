// Sourced from the VITE_APP_VERSION env var (see .env) so the version can be
// bumped without touching code. Falls back to the package.json version.
import { version as packageVersion } from '../../package.json';

export const APP_VERSION = import.meta.env.VITE_APP_VERSION || packageVersion;
