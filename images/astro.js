import React from "react";

const AstroSVG = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="50"
      version="1"
      viewBox="0 0 1332 586"
    >
      <path
        style={{ fill: color ? color : "black" }}
        d="M4626 5085c-14-8-30-17-36-20-6-4-2-21 10-45 16-32 20-59 20-150 0-100-8-139-30-160-4-3-12-25-19-49-12-42-12-44 17-75 16-17 55-68 87-113 45-63 64-83 82-83s23 6 23 24c0 32 7 33 173 35 132 2 139 1 144-18 5-20 13-21 109-21h104l6-39c6-37 9-39 48-45 22-3 55-3 71-1 17 2 109 7 205 10 96 4 194 8 217 10 40 2 41 2 32-22-16-42-11-53 21-53h30v-562c0-310 3-627 7-705l6-143h-83v-136l-91-109c-50-61-108-130-129-155-20-25-83-100-139-168-55-67-145-175-199-240-53-64-110-134-126-155-16-20-37-37-47-37-19 0-79-72-79-96 0-23 31-44 65-44 27 0 40 8 65 37 17 21 29 47 28 59-2 12 18 45 52 85 30 36 120 146 200 244 80 99 179 220 220 271 41 50 106 131 145 178 73 90 88 98 140 74 16-7 25-19 25-34 0-13 5-26 10-29 6-4 10-103 10-265 0-220-2-259-15-264-18-6-21-86-5-117 12-22 78-27 98-7 18 18 16 117-3 124-13 5-15 44-15 264 0 162 4 261 10 265 6 3 10 16 10 29 0 15 9 27 25 34 56 26 68 17 175-118 46-58 141-176 302-374 208-254 272-338 273-360 0-13 13-40 28-60 21-27 35-36 58-36 43 0 69 17 69 44 0 28-58 105-80 105-9 1-83 83-165 183-83 100-197 239-255 309-58 69-138 167-179 216l-73 90-2 89c-1 81-3 89-21 92-20 3-20 10-20 757v755l60 2c33 0 71 2 85 3s133 5 265 9 248 9 257 12 27-2 40-10 39-17 59-21c31-6 37-11 48-50l13-44 151 5c84 3 177 7 207 9s63 4 72 4c56 3 81 320 48 604-14 112-31 139-85 132-16-2-111-7-209-10-106-3-185-10-192-16-8-6-16-26-20-45-3-19-10-35-15-35-31-5-73-20-89-34-8-7-46-13-85-14-38-1-117-3-175-6s-177-7-265-10-225-7-305-10-215-7-300-10-206-7-267-10l-113-5v40c0 29 4 40 15 40 8 0 15-9 15-20 0-19 7-20 100-20 100 0 101 0 111 28 13 33 8 187-6 201-6 6-48 8-107 4-83-5-97-8-101-24-4-15-15-19-56-19-34 0-51-4-51-12 0-9-22-14-70-16-42-1-70 2-70 8 0 5-7 10-15 10-12 0-15-14-15-69 0-71 13-97 34-70 14 18 135 19 154 2 8-8 12-29 10-50-3-32-6-38-25-36-18 2-22-4-28-37-4-22-11-42-15-45-5-3-50-6-101-7-85-2-92-3-102-25-5-13-15-23-21-23-6-1-42-3-81-5-213-11-225-10-225 26 0 10-3 19-7 19-34 0-48 261-18 319 13 26 13 30-3 43-25 22-85 29-116 13zM1610 4833c-5-21-15-65-21-98s-24-109-39-170c-16-60-42-168-59-240-29-125-157-665-206-870-42-176-203-854-240-1015-20-85-49-209-65-275s-45-190-65-275c-19-85-63-267-96-405-33-137-59-261-57-275 2-19 10-26 31-28 15-2 27-7 27-11s32-14 70-21c39-7 70-16 70-20s32-13 71-20c57-11 72-11 78-1 5 7 29 110 55 229 42 195 53 243 62 277 1 6 14 66 29 135s39 184 55 255c16 72 34 157 40 190s20 89 30 125 34 135 53 220c20 85 49 214 66 285 17 72 67 294 111 495s92 415 105 475c14 61 47 209 74 330s50 217 50 212c1-10 185-843 215-977 14-58 27-121 31-140 3-19 20-93 36-165 55-241 89-389 120-530 17-77 34-156 39-175 9-39 75-331 223-990l53-235h77c42 0 475 2 962 3l885 2v340l-812 2-812 3-17 70c-52 219-240 1009-270 1140-17 72-41 173-55 225-13 52-29 120-34 150-6 30-19 88-30 127-11 40-31 123-44 185-14 62-36 160-50 218-156 652-223 929-252 1055-19 83-39 167-45 188l-10 37h-428l-11-37zM10470 4809c-204-52-364-187-467-394-61-123-112-311-144-535-17-121-23-631-10-777 59-623 277-947 685-1018 83-14 278-6 361 15 336 84 540 378 605 870 28 210 28 770 0 980-65 495-274 787-617 864-104 23-315 21-413-5zm355-251c187-47 300-215 347-513 39-257 35-923-8-1191-58-366-245-544-540-512-224 24-350 173-409 486-35 187-45 331-45 652 0 531 51 782 190 949 108 128 279 176 465 129z"
        transform="matrix(.1 0 0 -.1 0 586)"
      ></path>
      <path
        style={{ fill: color ? color : "black" }}
        d="M3444 4781c-303-105-482-394-445-721 22-199 102-319 299-452 60-40 354-204 525-293 51-26 155-113 188-156 90-118 119-276 85-464-35-196-183-305-415-305-138 0-211 23-295 89-75 60-115 147-141 306-9 55-20 103-23 107-5 4-267-23-299-31-10-3 1-131 17-197 55-231 199-408 395-488 138-56 371-73 533-40 265 54 469 242 532 490 26 100 28 358 5 449-17 64-71 171-112 220-87 104-323 259-713 468-143 77-242 177-264 271-4 16-7 68-7 115 0 205 96 353 258 397 81 22 209 16 275-13 98-44 184-155 224-288 10-33 20-63 24-67 3-4 68 2 145 12 77 11 143 20 147 20 25 0-31 173-90 280-45 82-168 204-247 247-120 63-167 73-352 73-158 0-173-2-249-29zM7870 3475V2140h310v1190h325l334-616c184-339 340-618 347-621 14-5 267 101 271 114 2 5-132 258-298 563s-303 560-306 566c-2 6 18 19 44 29 219 82 375 262 438 505 21 79 29 261 16 358-32 250-205 460-453 550l-73 27-477 3-478 3V3475zm736 1086c226-19 349-102 401-271 24-78 23-321-1-405-54-185-161-282-337-305-41-5-167-10-281-10h-208v1000h163c89-1 208-5 263-9zM10063 1990c-18-20-33-42-33-47 0-13 195-105 279-132 130-42 220-56 371-55 155 0 245 14 394 61 102 32 266 110 266 126-1 7-16 29-34 50l-32 39-80-37c-369-171-688-172-1014-4-42 21-78 39-80 38-3 0-20-18-37-39zM10265 1670c-16-17-33-30-37-30-5 0-8-6-8-13 0-14 131-65 240-94 89-24 357-24 450-1 87 22 240 78 240 88 0 4-20 24-45 45l-46 37-47-20c-83-36-194-62-287-69-103-7-213 11-323 53-98 37-103 37-137 4zM6015 1379c-44-86-65-189-65-316 0-133 19-230 63-320 33-68 46-76 63-39 8 18 8 30-4 51-39 76-54 142-59 266-6 140 9 234 51 325 19 41 21 53 11 67-20 27-33 20-60-34zM7522 1418c-16-16-15-28 8-76 71-147 71-415-1-567-18-38-20-51-11-71 16-34 25-30 54 24 55 103 63 144 63 332 0 189-9 235-62 328-27 45-32 49-51 30zM6280 1390c0-20 5-30 15-30 13 0 15-37 15-275s-2-275-15-275c-10 0-15-10-15-30v-30h91c50 0 99 4 109 10 73 39 94 237 35 324-23 34-23 38-10 70 19 46 19 147 0 193-29 68-38 73-137 73h-88v-30zm163-62c12-14 17-37 17-78 0-65-18-95-62-106l-28-6v222l28-6c15-3 35-15 45-26zm14-270c37-30 40-176 5-218-9-11-34-23-54-27l-38-6v275l38-7c20-4 43-11 49-17zM6680 1085V750h60v330h110V750h70v670h-70v-280h-110v280h-60v-335zM7080 1130c0-312 4-341 51-374 38-26 96-21 129 12 42 43 50 102 50 392v260h-59l-3-278c-3-246-5-281-21-305-21-33-50-35-71-5-14 19-16 65-16 305v283h-60v-290zM10479 1369c-43-45-40-49 46-75 84-25 251-25 325 0 30 10 58 21 62 25 5 4-12 26-36 50l-43 43-47-16c-58-20-134-20-206-1-30 8-57 14-60 14-3-1-21-19-41-40zM4680 1370c0-23 4-30 20-30 20 0 20-7 20-275s0-275-20-275c-16 0-20-7-20-30v-30h150v30c0 25-4 30-25 30h-25v550h25c21 0 25 5 25 30v30h-150v-30zM5000 1370c0-25 4-30 25-30h25V790h-25c-21 0-25-5-25-30v-30h150v30c0 25-4 30-25 30h-25v550h25c21 0 25 5 25 30v30h-150v-30zM5230 1370v-30h150V730h50v610h130v60h-330v-30zM10359 1153c-3-15 3-798 6-801 2-2 28-4 59-4l56-1v-77l198 2 197 3 3 38 3 37h129v810h-325c-179 0-326-3-326-7zM7800 910V740h880v340h-880V910zM8839 1070c-4-3-10-144-11-312l-3-307 720 2 720 2 5 310 5 310h-713c-393 0-718-2-723-5zM11100 1072c-6-2-10-115-10-311V453h720l720-1v623h-710c-390 0-714-1-720-3z"
        transform="matrix(.1 0 0 -.1 0 586)"
      ></path>
    </svg>
  );
};

export default AstroSVG;
