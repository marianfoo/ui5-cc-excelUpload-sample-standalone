/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";return{email:new RegExp(/^(?:(?:(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.)*")(?:\.(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.)*"))*@(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|\[(?:[^\[\]\r\\]|\\.)*\])(?:\.(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|\[(?:[^\[\]\r\\]|\\.)*\]))+|(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.)*")*\<(?:@(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|\[(?:[^\[\]\r\\]|\\.)*\])(?:\.(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|\[(?:[^\[\]\r\\]|\\.)*\]))+(?:,@(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|\[(?:[^\[\]\r\\]|\\.)*\])(?:\.(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|\[(?:[^\[\]\r\\]|\\.)*\]))+)*:)?(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.)*")(?:\.(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.)*"))*@(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|\[(?:[^\[\]\r\\]|\\.)*\])(?:\.(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|\[(?:[^\[\]\r\\]|\\.)*\]))+\>)|(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.)*")*:(?:(?:(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.)*")(?:\.(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.)*"))*@(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|\[(?:[^\[\]\r\\]|\\.)*\])(?:\.(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|\[(?:[^\[\]\r\\]|\\.)*\]))+|(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.)*")*\<(?:@(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|\[(?:[^\[\]\r\\]|\\.)*\])(?:\.(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|\[(?:[^\[\]\r\\]|\\.)*\]))+(?:,@(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|\[(?:[^\[\]\r\\]|\\.)*\])(?:\.(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|\[(?:[^\[\]\r\\]|\\.)*\]))+)*:)?(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.)*")(?:\.(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.)*"))*@(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|\[(?:[^\[\]\r\\]|\\.)*\])(?:\.(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|\[(?:[^\[\]\r\\]|\\.)*\]))+\>)(?:,\s*(?:(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.)*")(?:\.(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.)*"))*@(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|\[(?:[^\[\]\r\\]|\\.)*\])(?:\.(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|\[(?:[^\[\]\r\\]|\\.)*\]))+|(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.)*")*\<(?:@(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|\[(?:[^\[\]\r\\]|\\.)*\])(?:\.(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|\[(?:[^\[\]\r\\]|\\.)*\]))+(?:,@(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|\[(?:[^\[\]\r\\]|\\.)*\])(?:\.(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|\[(?:[^\[\]\r\\]|\\.)*\]))+)*:)?(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.)*")(?:\.(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|"(?:[^\"\r\\]|\\.)*"))*@(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|\[(?:[^\[\]\r\\]|\\.)*\])(?:\.(?:[^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031-][^()<>@,;:\\".\[\]!~*'&=$?\/ \000-\031]*(?:$|(?=[\["()<>@,;:\\".\[\]]))|\[(?:[^\[\]\r\\]|\\.)*\]))+\>))*)?;\s*)$/).source}});
//# sourceMappingURL=CommonPatterns.js.map