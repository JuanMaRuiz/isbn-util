[![Build Status](https://travis-ci.org/JuanMaRuiz/isbn-util.svg?branch=master)](https://travis-ci.org/JuanMaRuiz/isbn-util)
[![Coverage Status](https://coveralls.io/repos/github/JuanMaRuiz/isbn-util/badge.svg?branch=master)](https://coveralls.io/github/JuanMaRuiz/isbn-util?branch=master)

# ISBN Util

> **Breaking change** from version 2.0.0. From this version this module should be used as esm module. If you prefer use as CommonJS Module, install previous **v1.1.2**

This module **check if an ISBN is valid** or not **and** also provide a method to **generate** a **valid random ISBN-10** or **ISBN-13**

## Install

```bash
npm i isbn-util --save-dev
```

## Usage

```bash
import { validate, generate } from 'isbn-util';

validate('84-481-2231-3');
//=> true

validate('0137081073');
//=> true

validate('isbn: 84-481-2231-3');
//=> false

generate('13');
//=> '9780137081073'

generate('13', 'prefix');
//=> 'isbn-13: 9780137081073'

generate('10');
//=> '8448122313'
```

