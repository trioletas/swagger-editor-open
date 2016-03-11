'use strict';

const url = require('url');
const opn = require('opn');
const serve = require('swagger-editor-serve');

serve().then(editorUrl => opn(url.format(editorUrl)));
